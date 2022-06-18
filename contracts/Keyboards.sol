//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Keyboards {
    enum KeyboardKind {
        SixtyPercent,
        SeventyFivePercent,
        EightyPercent,
        Iso105
    }

    struct Keyboard {
        KeyboardKind kind;
        bool isPBT;
        string filter;
    }

    Keyboard[] public createKeyboards;

    function getKeyboards() public view returns (Keyboard[] memory) {
        return createKeyboards;
    }

    function create(
        KeyboardKind _kind,
        bool _isPBT,
        string calldata _filter
    ) external {
        Keyboard memory newKeyboard = Keyboard({
            kind: _kind,
            isPBT: _isPBT,
            filter: _filter
        });

        createKeyboards.push(newKeyboard);
    }
}
