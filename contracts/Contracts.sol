// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;
contract Contract{
    uint count1;
    uint count2;
    address public  owner;
    constructor()
    {
        owner=msg.sender;
    }

    address win;
    address winner1;
    uint count=0;
    mapping(address=>user1)user;

     
struct factory
{
    string name;
    uint amount;
}
uint amount1;
mapping(string=>factory[])  good;

mapping(string=>factory[])  avg;
    struct user1{
     string name;
    uint budget;
    uint success_rate;
    }
    address[]user_address;
    function partipate(string  memory name2,uint amount,uint success,address ad) external 
    { 
        user1 memory t= user1(name2,amount,success);
   user[ad]=t;
  user_address.push(ad);
    }
     function get()external view returns (uint)
    {
  return count;
    }
    function winner()external returns(user1 memory)
    {
   require(msg.sender==owner,"you not the owner");
     uint j=0;
    
    uint max = type(uint).max;
  uint h=0;
     for(j=0;j<user_address.length;j++)
     {
        if(max>user[user_address[j]].budget)
        {
            max=user[user_address[j]].budget;
          h=user[user_address[j]].success_rate;
            win=user_address[j];
        }
       else  if(max==user[user_address[j]].budget && h<user[user_address[j]].success_rate)
        {
              max=user[user_address[j]].budget;
            win=user_address[j];
        }
     }
   address t=user_address[user_address.length-1];
   user_address.pop();
   user_address.push(t);
count++;
   winner1=win;
  return user[win];
    }
  

    function getamount()external view returns(string memory,uint)
    {
       require(win!=0x0000000000000000000000000000000000000000,"WAIT");
      return ("THE REMAINING AMOUNT:",user[winner1].budget); 
    }


function addgood(string memory name,string memory material,uint amount)external 
{
require(msg.sender==owner,"YOU ARE NOT THE OWNER");
factory memory g=factory(name,amount);

good[material].push(g);

}

address c;
function getproduct(string memory p_name, uint no_of_product) external returns (factory memory) {
    require(msg.sender == win, "You are not the contractor");

    factory[] memory p = good[p_name];
    require(p.length > 0, "No products found for the given name");

    uint min = type(uint).max;
    factory memory selectedProduct;

    // Find the product with the minimum amount
    for (uint j = 0; j < p.length; j++) {
        if (p[j].amount < min) {
            min = p[j].amount;
            selectedProduct = p[j];
        }
    }

    uint totalCost = no_of_product * min;
    require(user[winner1].budget >= totalCost, "Insufficient budget to purchase the product");

    // Deduct the budget
    user[winner1].budget -= totalCost;

    return selectedProduct;
}



//warehouse
function check()external {
count1+=1;

}
//construction
function construction()external 
{
count2+=1;
}
}