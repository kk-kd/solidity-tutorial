//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Keyboards {
    string[] public createKeyboards;

    function getKeyboards() public view returns (string[] memory) {
        return createKeyboards;
    }

    function create(string calldata _description) external {
        createKeyboards.push(_description);
    }
}
