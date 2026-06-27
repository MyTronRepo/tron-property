// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract RealEstate {
    struct Property {
        string propertyId;
        address owner;
        string documentHash;
        bool exists;
    }

    struct Transfer {
        string transferId;
        string propertyId;
        address from;
        address to;
        uint256 share;
        bool approved;
    }

    mapping(string => Property) public properties;
    mapping(string => Transfer) public transfers;

    // =========================
    // Register Property
    // =========================
    function registerProperty(
        string memory _propertyId,
        string memory _documentHash
    ) public {
        require(!properties[_propertyId].exists, "Already exists");

        properties[_propertyId] = Property({
            propertyId: _propertyId,
            owner: msg.sender,
            documentHash: _documentHash,
            exists: true
        });
    }

    // =========================
    // Update Document Hash
    // =========================
    function updateDocument(
        string memory _propertyId,
        string memory _documentHash
    ) public {
        require(properties[_propertyId].exists, "Not found");
        require(properties[_propertyId].owner == msg.sender, "Not owner");

        properties[_propertyId].documentHash = _documentHash;
    }

    // =========================
    // Create Transfer
    // =========================
    function createTransfer(
        string memory _transferId,
        string memory _propertyId,
        address _to,
        uint256 _share
    ) public {
        require(properties[_propertyId].exists, "Property not found");
        require(properties[_propertyId].owner == msg.sender, "Not owner");

        transfers[_transferId] = Transfer({
            transferId: _transferId,
            propertyId: _propertyId,
            from: msg.sender,
            to: _to,
            share: _share,
            approved: false
        });
    }

    // =========================
    // Approve Transfer
    // =========================
    function approveTransfer(string memory _transferId) public {
        Transfer storage t = transfers[_transferId];

        require(t.to == msg.sender, "Not buyer");

        t.approved = true;

        properties[t.propertyId].owner = t.to;
    }

    // =========================
    // Get Property
    // =========================
    function getProperty(
        string memory _propertyId
    ) public view returns (Property memory) {
        return properties[_propertyId];
    }
}
