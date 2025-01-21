// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.2 <0.9.0;
contract Twitter{

struct tweet
{
    string message;
    uint256 no_of_like;
    address user;

}
mapping(address=>tweet[]) private tweets; 

function add(string memory mes) public 
{
tweet memory h=tweet({
message:mes,
no_of_like:0,
user:msg.sender
});

tweets[msg.sender].push(h);
}

function get(address  ad) public view returns(tweet[] memory)
{
return tweets[ad];
}
function sayhi() external pure returns (string memory) {
    return "hello";
}


}