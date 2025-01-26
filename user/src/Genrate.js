const QRCode = require('qrcode');
const web3 = require('web3');

const web3 = require('web3'); // Correct way to require Web3
const web3 = new Web3("https://eth-sepolia.g.alchemy.com/v2/SjiWFnjJW6LYi412MXqkiaU9m4iw5KRG"); // Replace with Infura/Alchemy/Ganache URL
const contractAddress = "0xEaBa70bf52028a2b320C4776a661738C29eBF61"; //Replace with your contract's address
const contractABI = [{
    "_format": "hh-sol-artifact-1",
    "contractName": "Contract",
    "sourceName": "contracts/Contract.sol",
    "abi": [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "material",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "addavg",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "material",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "addgood",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "check",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "construction",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "get",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getamount",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "p_name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "no_of_product",
            "type": "uint256"
          }
        ],
        "name": "getproduct",
        "outputs": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              }
            ],
            "internalType": "struct Contract.factory",
            "name": "",
            "type": "tuple"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "name2",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "success",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "ad",
            "type": "address"
          }
        ],
        "name": "partipate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "winner",
        "outputs": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "budget",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "success_rate",
                "type": "uint256"
              }
            ],
            "internalType": "struct Contract.user1",
            "name": "",
            "type": "tuple"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "bytecode": "0x60806040526000600555348015601457600080fd5b5033600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611d81806100656000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063826ff93311610066578063826ff93314610121578063919840ad1461013d578063ab9a09e214610147578063d28f9b6b14610151578063dfbf53ae1461016d57610093565b8063534117e1146100985780635d6bc743146100b7578063630f6dcb146100d35780636d4ce63c14610103575b600080fd5b6100a061018b565b6040516100ae9291906112a5565b60405180910390f35b6100d160048036038101906100cc919061144a565b6102c3565b005b6100ed60048036038101906100e891906114d5565b6103dc565b6040516100fa91906115c7565b60405180910390f35b61010b6107d7565b60405161011891906115e9565b60405180910390f35b61013b60048036038101906101369190611662565b6107e1565b005b6101456108d7565b005b61014f6108f2565b005b61016b6004803603810190610166919061144a565b61090d565b005b610175610a26565b6040516101829190611735565b60405180910390f35b606060008073ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff160361021f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610216906117a3565b60405180910390fd5b60066000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101546040518060400160405280601581526020017f5448452052454d41494e494e4720414d4f554e543a000000000000000000000081525090915091509091565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610353576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161034a9061180f565b60405180910390fd5b6000604051806040016040528085815260200183815250905060088360405161037c919061186b565b908152602001604051809103902081908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000190816103c99190611a8e565b5060208201518160010155505050505050565b6103e46111c1565b6000807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90506104126111c1565b6000600887604051610424919061186b565b9081526020016040518091039020805480602002602001604051908101604052809291908181526020016000905b828210156105205783829060005260206000209060020201604051806040016040529081600082018054610485906118b1565b80601f01602080910402602001604051908101604052809291908181526020018280546104b1906118b1565b80156104fe5780601f106104d3576101008083540402835291602001916104fe565b820191906000526020600020905b8154815290600101906020018083116104e157829003601f168201915b5050505050815260200160018201548152505081526020019060010190610452565b505050509050600093505b80518410156105a65780848151811061054757610546611b60565b5b6020026020010151602001518311156105995780848151811061056d5761056c611b60565b5b602002602001015160200151925080848151811061058e5761058d611b60565b5b602002602001015191505b838060010194505061052b565b60006009886040516105b8919061186b565b9081526020016040518091039020805480602002602001604051908101604052809291908181526020016000905b828210156106b45783829060005260206000209060020201604051806040016040529081600082018054610619906118b1565b80601f0160208091040260200160405190810160405280929190818152602001828054610645906118b1565b80156106925780601f1061066757610100808354040283529160200191610692565b820191906000526020600020905b81548152906001019060200180831161067557829003601f168201915b50505050508152602001600182015481525050815260200190600101906105e6565b505050509050600094505b805185101561073a578085815181106106db576106da611b60565b5b60200260200101516020015184111561072d5780858151811061070157610700611b60565b5b602002602001015160200151935080858151811061072257610721611b60565b5b602002602001015192505b84806001019550506106bf565b83876107469190611bbe565b60078190555060075460066000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008282546107c29190611c00565b92505081905550829550505050505092915050565b6000600554905090565b6000604051806060016040528086815260200185815260200184815250905080600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000190816108559190611a8e565b506020820151816001015560408201518160020155905050600a829080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050505050565b60016000808282546108e99190611c34565b92505081905550565b60018060008282546109049190611c34565b92505081905550565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461099d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109949061180f565b60405180910390fd5b600060405180604001604052808581526020018381525090506009836040516109c6919061186b565b90815260200160405180910390208190806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000019081610a139190611a8e565b5060208201518160010155505050505050565b610a2e6111db565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610abe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ab590611cb4565b60405180910390fd5b6000807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff905060008092505b600a80549050831015610f2d5760066000600a8581548110610b0f57610b0e611b60565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154821115610d095760066000600a8581548110610b9757610b96611b60565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154915060066000600a8581548110610c1a57610c19611b60565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201549050600a8381548110610c9957610c98611b60565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610f20565b60066000600a8581548110610d2157610d20611b60565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001015482148015610e17575060066000600a8581548110610dab57610daa611b60565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002015481105b15610f1f5760066000600a8581548110610e3457610e33611b60565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101549150600a8381548110610eb357610eb2611b60565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5b8280600101935050610aea565b6000600a6001600a80549050610f439190611c00565b81548110610f5457610f53611b60565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600a805480610f9357610f92611cd4565b5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690559055600a819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506005600081548092919061103e90611d03565b9190505550600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060066000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020604051806060016040529081600082018054611122906118b1565b80601f016020809104026020016040519081016040528092919081815260200182805461114e906118b1565b801561119b5780601f106111705761010080835404028352916020019161119b565b820191906000526020600020905b81548152906001019060200180831161117e57829003601f168201915b505050505081526020016001820154815260200160028201548152505094505050505090565b604051806040016040528060608152602001600081525090565b60405180606001604052806060815260200160008152602001600081525090565b600081519050919050565b600082825260208201905092915050565b60005b8381101561123657808201518184015260208101905061121b565b60008484015250505050565b6000601f19601f8301169050919050565b600061125e826111fc565b6112688185611207565b9350611278818560208601611218565b61128181611242565b840191505092915050565b6000819050919050565b61129f8161128c565b82525050565b600060408201905081810360008301526112bf8185611253565b90506112ce6020830184611296565b9392505050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61132b82611242565b810181811067ffffffffffffffff8211171561134a576113496112f3565b5b80604052505050565b600061135d6112d5565b90506113698282611322565b919050565b600067ffffffffffffffff821115611389576113886112f3565b5b61139282611242565b9050602081019050919050565b82818337600083830152505050565b60006113c16113bc8461136e565b611353565b9050828152602081018484840111156113dd576113dc6112ee565b5b6113e884828561139f565b509392505050565b600082601f830112611405576114046112e9565b5b81356114158482602086016113ae565b91505092915050565b6114278161128c565b811461143257600080fd5b50565b6000813590506114448161141e565b92915050565b600080600060608486031215611463576114626112df565b5b600084013567ffffffffffffffff811115611481576114806112e4565b5b61148d868287016113f0565b935050602084013567ffffffffffffffff8111156114ae576114ad6112e4565b5b6114ba868287016113f0565b92505060406114cb86828701611435565b9150509250925092565b600080604083850312156114ec576114eb6112df565b5b600083013567ffffffffffffffff81111561150a576115096112e4565b5b611516858286016113f0565b925050602061152785828601611435565b9150509250929050565b600082825260208201905092915050565b600061154d826111fc565b6115578185611531565b9350611567818560208601611218565b61157081611242565b840191505092915050565b6115848161128c565b82525050565b600060408301600083015184820360008601526115a78282611542565b91505060208301516115bc602086018261157b565b508091505092915050565b600060208201905081810360008301526115e1818461158a565b905092915050565b60006020820190506115fe6000830184611296565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061162f82611604565b9050919050565b61163f81611624565b811461164a57600080fd5b50565b60008135905061165c81611636565b92915050565b6000806000806080858703121561167c5761167b6112df565b5b600085013567ffffffffffffffff81111561169a576116996112e4565b5b6116a6878288016113f0565b94505060206116b787828801611435565b93505060406116c887828801611435565b92505060606116d98782880161164d565b91505092959194509250565b600060608301600083015184820360008601526117028282611542565b9150506020830151611717602086018261157b565b50604083015161172a604086018261157b565b508091505092915050565b6000602082019050818103600083015261174f81846116e5565b905092915050565b7f5741495400000000000000000000000000000000000000000000000000000000600082015250565b600061178d600483611207565b915061179882611757565b602082019050919050565b600060208201905081810360008301526117bc81611780565b9050919050565b7f594f5520415245204e4f5420544845204f574e45520000000000000000000000600082015250565b60006117f9601583611207565b9150611804826117c3565b602082019050919050565b60006020820190508181036000830152611828816117ec565b9050919050565b600081905092915050565b6000611845826111fc565b61184f818561182f565b935061185f818560208601611218565b80840191505092915050565b6000611877828461183a565b915081905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806118c957607f821691505b6020821081036118dc576118db611882565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026119447fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82611907565b61194e8683611907565b95508019841693508086168417925050509392505050565b6000819050919050565b600061198b6119866119818461128c565b611966565b61128c565b9050919050565b6000819050919050565b6119a583611970565b6119b96119b182611992565b848454611914565b825550505050565b600090565b6119ce6119c1565b6119d981848461199c565b505050565b5b818110156119fd576119f26000826119c6565b6001810190506119df565b5050565b601f821115611a4257611a13816118e2565b611a1c846118f7565b81016020851015611a2b578190505b611a3f611a37856118f7565b8301826119de565b50505b505050565b600082821c905092915050565b6000611a6560001984600802611a47565b1980831691505092915050565b6000611a7e8383611a54565b9150826002028217905092915050565b611a97826111fc565b67ffffffffffffffff811115611ab057611aaf6112f3565b5b611aba82546118b1565b611ac5828285611a01565b600060209050601f831160018114611af85760008415611ae6578287015190505b611af08582611a72565b865550611b58565b601f198416611b06866118e2565b60005b82811015611b2e57848901518255600182019150602085019450602081019050611b09565b86831015611b4b5784890151611b47601f891682611a54565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611bc98261128c565b9150611bd48361128c565b9250828202611be28161128c565b91508282048414831517611bf957611bf8611b8f565b5b5092915050565b6000611c0b8261128c565b9150611c168361128c565b9250828203905081811115611c2e57611c2d611b8f565b5b92915050565b6000611c3f8261128c565b9150611c4a8361128c565b9250828201905080821115611c6257611c61611b8f565b5b92915050565b7f796f75206e6f7420746865206f776e6572000000000000000000000000000000600082015250565b6000611c9e601183611207565b9150611ca982611c68565b602082019050919050565b60006020820190508181036000830152611ccd81611c91565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b6000611d0e8261128c565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611d4057611d3f611b8f565b5b60018201905091905056fea2646970667358221220c6b3e6b83fcecd201d2d730b16dedd01078dbdc8f284514fd2c3d24ebd9b98ac64736f6c634300081c0033",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100935760003560e01c8063826ff93311610066578063826ff93314610121578063919840ad1461013d578063ab9a09e214610147578063d28f9b6b14610151578063dfbf53ae1461016d57610093565b8063534117e1146100985780635d6bc743146100b7578063630f6dcb146100d35780636d4ce63c14610103575b600080fd5b6100a061018b565b6040516100ae9291906112a5565b60405180910390f35b6100d160048036038101906100cc919061144a565b6102c3565b005b6100ed60048036038101906100e891906114d5565b6103dc565b6040516100fa91906115c7565b60405180910390f35b61010b6107d7565b60405161011891906115e9565b60405180910390f35b61013b60048036038101906101369190611662565b6107e1565b005b6101456108d7565b005b61014f6108f2565b005b61016b6004803603810190610166919061144a565b61090d565b005b610175610a26565b6040516101829190611735565b60405180910390f35b606060008073ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff160361021f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610216906117a3565b60405180910390fd5b60066000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101546040518060400160405280601581526020017f5448452052454d41494e494e4720414d4f554e543a000000000000000000000081525090915091509091565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610353576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161034a9061180f565b60405180910390fd5b6000604051806040016040528085815260200183815250905060088360405161037c919061186b565b908152602001604051809103902081908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000190816103c99190611a8e565b5060208201518160010155505050505050565b6103e46111c1565b6000807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90506104126111c1565b6000600887604051610424919061186b565b9081526020016040518091039020805480602002602001604051908101604052809291908181526020016000905b828210156105205783829060005260206000209060020201604051806040016040529081600082018054610485906118b1565b80601f01602080910402602001604051908101604052809291908181526020018280546104b1906118b1565b80156104fe5780601f106104d3576101008083540402835291602001916104fe565b820191906000526020600020905b8154815290600101906020018083116104e157829003601f168201915b5050505050815260200160018201548152505081526020019060010190610452565b505050509050600093505b80518410156105a65780848151811061054757610546611b60565b5b6020026020010151602001518311156105995780848151811061056d5761056c611b60565b5b602002602001015160200151925080848151811061058e5761058d611b60565b5b602002602001015191505b838060010194505061052b565b60006009886040516105b8919061186b565b9081526020016040518091039020805480602002602001604051908101604052809291908181526020016000905b828210156106b45783829060005260206000209060020201604051806040016040529081600082018054610619906118b1565b80601f0160208091040260200160405190810160405280929190818152602001828054610645906118b1565b80156106925780601f1061066757610100808354040283529160200191610692565b820191906000526020600020905b81548152906001019060200180831161067557829003601f168201915b50505050508152602001600182015481525050815260200190600101906105e6565b505050509050600094505b805185101561073a578085815181106106db576106da611b60565b5b60200260200101516020015184111561072d5780858151811061070157610700611b60565b5b602002602001015160200151935080858151811061072257610721611b60565b5b602002602001015192505b84806001019550506106bf565b83876107469190611bbe565b60078190555060075460066000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008282546107c29190611c00565b92505081905550829550505050505092915050565b6000600554905090565b6000604051806060016040528086815260200185815260200184815250905080600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000190816108559190611a8e565b506020820151816001015560408201518160020155905050600a829080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050505050565b60016000808282546108e99190611c34565b92505081905550565b60018060008282546109049190611c34565b92505081905550565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461099d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109949061180f565b60405180910390fd5b600060405180604001604052808581526020018381525090506009836040516109c6919061186b565b90815260200160405180910390208190806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000019081610a139190611a8e565b5060208201518160010155505050505050565b610a2e6111db565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610abe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ab590611cb4565b60405180910390fd5b6000807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff905060008092505b600a80549050831015610f2d5760066000600a8581548110610b0f57610b0e611b60565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154821115610d095760066000600a8581548110610b9757610b96611b60565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154915060066000600a8581548110610c1a57610c19611b60565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201549050600a8381548110610c9957610c98611b60565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610f20565b60066000600a8581548110610d2157610d20611b60565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001015482148015610e17575060066000600a8581548110610dab57610daa611b60565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002015481105b15610f1f5760066000600a8581548110610e3457610e33611b60565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101549150600a8381548110610eb357610eb2611b60565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5b8280600101935050610aea565b6000600a6001600a80549050610f439190611c00565b81548110610f5457610f53611b60565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600a805480610f9357610f92611cd4565b5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690559055600a819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506005600081548092919061103e90611d03565b9190505550600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060066000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020604051806060016040529081600082018054611122906118b1565b80601f016020809104026020016040519081016040528092919081815260200182805461114e906118b1565b801561119b5780601f106111705761010080835404028352916020019161119b565b820191906000526020600020905b81548152906001019060200180831161117e57829003601f168201915b505050505081526020016001820154815260200160028201548152505094505050505090565b604051806040016040528060608152602001600081525090565b60405180606001604052806060815260200160008152602001600081525090565b600081519050919050565b600082825260208201905092915050565b60005b8381101561123657808201518184015260208101905061121b565b60008484015250505050565b6000601f19601f8301169050919050565b600061125e826111fc565b6112688185611207565b9350611278818560208601611218565b61128181611242565b840191505092915050565b6000819050919050565b61129f8161128c565b82525050565b600060408201905081810360008301526112bf8185611253565b90506112ce6020830184611296565b9392505050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61132b82611242565b810181811067ffffffffffffffff8211171561134a576113496112f3565b5b80604052505050565b600061135d6112d5565b90506113698282611322565b919050565b600067ffffffffffffffff821115611389576113886112f3565b5b61139282611242565b9050602081019050919050565b82818337600083830152505050565b60006113c16113bc8461136e565b611353565b9050828152602081018484840111156113dd576113dc6112ee565b5b6113e884828561139f565b509392505050565b600082601f830112611405576114046112e9565b5b81356114158482602086016113ae565b91505092915050565b6114278161128c565b811461143257600080fd5b50565b6000813590506114448161141e565b92915050565b600080600060608486031215611463576114626112df565b5b600084013567ffffffffffffffff811115611481576114806112e4565b5b61148d868287016113f0565b935050602084013567ffffffffffffffff8111156114ae576114ad6112e4565b5b6114ba868287016113f0565b92505060406114cb86828701611435565b9150509250925092565b600080604083850312156114ec576114eb6112df565b5b600083013567ffffffffffffffff81111561150a576115096112e4565b5b611516858286016113f0565b925050602061152785828601611435565b9150509250929050565b600082825260208201905092915050565b600061154d826111fc565b6115578185611531565b9350611567818560208601611218565b61157081611242565b840191505092915050565b6115848161128c565b82525050565b600060408301600083015184820360008601526115a78282611542565b91505060208301516115bc602086018261157b565b508091505092915050565b600060208201905081810360008301526115e1818461158a565b905092915050565b60006020820190506115fe6000830184611296565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061162f82611604565b9050919050565b61163f81611624565b811461164a57600080fd5b50565b60008135905061165c81611636565b92915050565b6000806000806080858703121561167c5761167b6112df565b5b600085013567ffffffffffffffff81111561169a576116996112e4565b5b6116a6878288016113f0565b94505060206116b787828801611435565b93505060406116c887828801611435565b92505060606116d98782880161164d565b91505092959194509250565b600060608301600083015184820360008601526117028282611542565b9150506020830151611717602086018261157b565b50604083015161172a604086018261157b565b508091505092915050565b6000602082019050818103600083015261174f81846116e5565b905092915050565b7f5741495400000000000000000000000000000000000000000000000000000000600082015250565b600061178d600483611207565b915061179882611757565b602082019050919050565b600060208201905081810360008301526117bc81611780565b9050919050565b7f594f5520415245204e4f5420544845204f574e45520000000000000000000000600082015250565b60006117f9601583611207565b9150611804826117c3565b602082019050919050565b60006020820190508181036000830152611828816117ec565b9050919050565b600081905092915050565b6000611845826111fc565b61184f818561182f565b935061185f818560208601611218565b80840191505092915050565b6000611877828461183a565b915081905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806118c957607f821691505b6020821081036118dc576118db611882565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026119447fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82611907565b61194e8683611907565b95508019841693508086168417925050509392505050565b6000819050919050565b600061198b6119866119818461128c565b611966565b61128c565b9050919050565b6000819050919050565b6119a583611970565b6119b96119b182611992565b848454611914565b825550505050565b600090565b6119ce6119c1565b6119d981848461199c565b505050565b5b818110156119fd576119f26000826119c6565b6001810190506119df565b5050565b601f821115611a4257611a13816118e2565b611a1c846118f7565b81016020851015611a2b578190505b611a3f611a37856118f7565b8301826119de565b50505b505050565b600082821c905092915050565b6000611a6560001984600802611a47565b1980831691505092915050565b6000611a7e8383611a54565b9150826002028217905092915050565b611a97826111fc565b67ffffffffffffffff811115611ab057611aaf6112f3565b5b611aba82546118b1565b611ac5828285611a01565b600060209050601f831160018114611af85760008415611ae6578287015190505b611af08582611a72565b865550611b58565b601f198416611b06866118e2565b60005b82811015611b2e57848901518255600182019150602085019450602081019050611b09565b86831015611b4b5784890151611b47601f891682611a54565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611bc98261128c565b9150611bd48361128c565b9250828202611be28161128c565b91508282048414831517611bf957611bf8611b8f565b5b5092915050565b6000611c0b8261128c565b9150611c168361128c565b9250828203905081811115611c2e57611c2d611b8f565b5b92915050565b6000611c3f8261128c565b9150611c4a8361128c565b9250828201905080821115611c6257611c61611b8f565b5b92915050565b7f796f75206e6f7420746865206f776e6572000000000000000000000000000000600082015250565b6000611c9e601183611207565b9150611ca982611c68565b602082019050919050565b60006020820190508181036000830152611ccd81611c91565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b6000611d0e8261128c565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611d4057611d3f611b8f565b5b60018201905091905056fea2646970667358221220c6b3e6b83fcecd201d2d730b16dedd01078dbdc8f284514fd2c3d24ebd9b98ac64736f6c634300081c0033",
    "linkReferences": {},
    "deployedLinkReferences": {}
  }]; // Replace with your contract's ABI

const contract = new web3.eth.Contract(contractABI, contractAddress);

// Generate a QR Code
const generateQR = async (data) => {
  try {
    const qrCodeFile = "qrcode.png";

    await QRCode.toFile(qrCodeFile, data, {
      color: {
        dark: "#000000", // Black dots
        light: "#FFFFFF", // White background
      },
    });

    console.log("QR Code generated and saved as ${qrCodeFile)");
  } catch (err) {
    console.error("Error generating QR code:", err);
  }
};

// Trigger a Solidity function when scanned
const triggerSmartContractFunction = async () => {
  const account = "0x3d85211e3494bAC95018299b5E5147Ac80eA7867"; // Your Ethereum account address
  const privateKey = "8d469d165ac894b793f8b5c95dfad17050519011302c69d8c322ab8e54ed65a8"; // Your Ethereum account private key

  // Build a transaction for the smart contract function
  const tx = contract.methods.check(); // Replace with your function

  const txObject = {
    to: contractAddress,
    data: tx,
    gas: 200000,
    gasPrice: web3.utils.toWei("50", "gwei"),
  };

  // Sign and send the transaction
  const signedTx = await web3.eth.accounts.signTransaction(txObject, privateKey);

  const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
  console.log("Transaction successful! Receipt:", receipt);
};

// Combine QR generation with smart contract trigger
(async () => {
  const qrData = "http://localhost:5174/"; // Replace with your backend or data
  await generateQR(qrData);

  console.log("Calling the smart contract...");
  await triggerSmartContractFunction();
})();