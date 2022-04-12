/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CommiteeMoney,
  CommiteeMoneyInterface,
} from "../../contracts/CommiteeMoney";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "winner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "date",
        type: "uint256",
      },
    ],
    name: "OpenCommitee",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "refunded",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "date",
        type: "uint256",
      },
    ],
    name: "PaymentReceived",
    type: "event",
  },
  {
    inputs: [],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "clearCommitee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "commiteeMembers",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "commiteeReward",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "commiteeWinners",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "destroyContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "fixedDepositAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNotWonMembers",
    outputs: [
      {
        internalType: "address[]",
        name: "addresses",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "hasEveryonePaid",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_member",
        type: "address",
      },
    ],
    name: "hasPaid",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_member",
        type: "address",
      },
    ],
    name: "hasWon",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_member",
        type: "address",
      },
    ],
    name: "isUserInCommitee",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastCommiteeOpenDate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "openCommitee",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "payCommitee",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "setAllowedParticipants",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "setCommiteeReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "setFixedDepositAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startCommitee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalAllowedParticipants",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052662386f26fc100006001556002805566470de4df82000060035534801561002a57600080fd5b5061004761003c61004c60201b60201c565b61005460201b60201c565b610118565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b61209680620001286000396000f3fe6080604052600436106101405760003560e01c8063722713f7116100b6578063a52b2b881161006f578063a52b2b8814610417578063be5e7f1f14610454578063e691d2fd1461046b578063f2fde38b14610494578063fbf47a9a146104bd578063fcb373c3146104fa57610140565b8063722713f7146103055780637833a23d14610330578063829bd8a11461035b5780638da5cb5b146103985780639c6acd3d146103c35780639d30edd1146103ec57610140565b80631aee091e116101085780631aee091e146102075780631c13ded114610232578063263c2c641461024957806328ad2ad714610274578063576b6e56146102b1578063715018a6146102ee57610140565b806306f2fee414610145578063092a5cce1461016e5780630ac3692c14610185578063186806a2146101b05780631a174fef146101db575b600080fd5b34801561015157600080fd5b5061016c600480360381019061016791906116f2565b610504565b005b34801561017a57600080fd5b5061018361058a565b005b34801561019157600080fd5b5061019a61061f565b6040516101a7919061172e565b60405180910390f35b3480156101bc57600080fd5b506101c5610625565b6040516101d2919061172e565b60405180910390f35b3480156101e757600080fd5b506101f061062b565b6040516101fe9291906117a5565b60405180910390f35b34801561021357600080fd5b5061021c61091e565b604051610229919061172e565b60405180910390f35b34801561023e57600080fd5b50610247610924565b005b34801561025557600080fd5b5061025e6109f1565b60405161026b91906117ce565b60405180910390f35b34801561028057600080fd5b5061029b600480360381019061029691906116f2565b610a77565b6040516102a891906117e9565b60405180910390f35b3480156102bd57600080fd5b506102d860048036038101906102d391906116f2565b610ab6565b6040516102e591906117e9565b60405180910390f35b3480156102fa57600080fd5b50610303610af5565b005b34801561031157600080fd5b5061031a610b7d565b604051610327919061172e565b60405180910390f35b34801561033c57600080fd5b50610345610b85565b604051610352919061172e565b60405180910390f35b34801561036757600080fd5b50610382600480360381019061037d9190611830565b610b8b565b60405161038f91906117ce565b60405180910390f35b3480156103a457600080fd5b506103ad610c39565b6040516103ba91906117e9565b60405180910390f35b3480156103cf57600080fd5b506103ea60048036038101906103e591906116f2565b610c62565b005b3480156103f857600080fd5b50610401610ce8565b60405161040e919061191b565b60405180910390f35b34801561042357600080fd5b5061043e60048036038101906104399190611830565b610e5f565b60405161044b91906117ce565b60405180910390f35b34801561046057600080fd5b50610469610f0d565b005b34801561047757600080fd5b50610492600480360381019061048d91906116f2565b611052565b005b3480156104a057600080fd5b506104bb60048036038101906104b69190611830565b6110d8565b005b3480156104c957600080fd5b506104e460048036038101906104df9190611830565b6111cf565b6040516104f191906117ce565b60405180910390f35b61050261121c565b005b61050c611380565b73ffffffffffffffffffffffffffffffffffffffff1661052a610c39565b73ffffffffffffffffffffffffffffffffffffffff1614610580576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105779061199a565b60405180910390fd5b8060038190555050565b610592611380565b73ffffffffffffffffffffffffffffffffffffffff166105b0610c39565b73ffffffffffffffffffffffffffffffffffffffff1614610606576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105fd9061199a565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff16ff5b60025481565b60045481565b600080610636611380565b73ffffffffffffffffffffffffffffffffffffffff16610654610c39565b73ffffffffffffffffffffffffffffffffffffffff16146106aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106a19061199a565b60405180910390fd5b600254600580549050146106f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ea90611a06565b60405180910390fd5b6106fb6109f1565b61073a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161073190611a72565b60405180910390fd5b6000610744610ce8565b905060008151334260405160200161075d929190611afb565b6040516020818303038152906040528051906020012060001c6107809190611b56565b9050600082828151811061079757610796611b87565b5b602002602001015190508073ffffffffffffffffffffffffffffffffffffffff166108fc6003549081150290604051600060405180830381858888f193505050501580156107e9573d6000803e3d6000fd5b508073ffffffffffffffffffffffffffffffffffffffff167fe1c5635ccdf9d101232c64d60044acb1d38bb3dd1d9ca60a82ae880d816d4ae360035442604051610834929190611bb6565b60405180910390a26007819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555042600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060025460078054905003610908576108f9610f0d565b8060019450945050505061091a565b42600481905550806000945094505050505b9091565b60035481565b61092c611380565b73ffffffffffffffffffffffffffffffffffffffff1661094a610c39565b73ffffffffffffffffffffffffffffffffffffffff16146109a0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109979061199a565b60405180910390fd5b6000600580549050146109e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109df90611c2b565b60405180910390fd5b42600481905550565b600080600090505b600580549050811015610a6e57610a4d60058281548110610a1d57610a1c611b87565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166111cf565b610a5b576000915050610a74565b8080610a6690611c7a565b9150506109f9565b50600190505b90565b60058181548110610a8757600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60078181548110610ac657600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610afd611380565b73ffffffffffffffffffffffffffffffffffffffff16610b1b610c39565b73ffffffffffffffffffffffffffffffffffffffff1614610b71576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b689061199a565b60405180910390fd5b610b7b6000611388565b565b600047905090565b60015481565b600080600090505b600580549050811015610c2e578273ffffffffffffffffffffffffffffffffffffffff1660058281548110610bcb57610bca611b87565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610c1b576001915050610c34565b8080610c2690611c7a565b915050610b93565b50600090505b919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610c6a611380565b73ffffffffffffffffffffffffffffffffffffffff16610c88610c39565b73ffffffffffffffffffffffffffffffffffffffff1614610cde576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cd59061199a565b60405180910390fd5b8060018190555050565b60606000600780549050600580549050610d029190611cc2565b67ffffffffffffffff811115610d1b57610d1a611cf6565b5b604051908082528060200260200182016040528015610d495781602001602082028036833780820191505090505b5090506000805b600580549050811015610e5657610da460058281548110610d7457610d73611b87565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16610e5f565b610e435760058181548110610dbc57610dbb611b87565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16838381518110610dfa57610df9611b87565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508180610e3f90611c7a565b9250505b8080610e4e90611c7a565b915050610d50565b50819250505090565b600080600090505b600780549050811015610f02578273ffffffffffffffffffffffffffffffffffffffff1660078281548110610e9f57610e9e611b87565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610eef576001915050610f08565b8080610efa90611c7a565b915050610e67565b50600090505b919050565b610f15611380565b73ffffffffffffffffffffffffffffffffffffffff16610f33610c39565b73ffffffffffffffffffffffffffffffffffffffff1614610f89576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f809061199a565b60405180910390fd5b600067ffffffffffffffff811115610fa457610fa3611cf6565b5b604051908082528060200260200182016040528015610fd25781602001602082028036833780820191505090505b5060059080519060200190610fe8929190611610565b50600067ffffffffffffffff81111561100457611003611cf6565b5b6040519080825280602002602001820160405280156110325781602001602082028036833780820191505090505b5060079080519060200190611048929190611610565b5042600481905550565b61105a611380565b73ffffffffffffffffffffffffffffffffffffffff16611078610c39565b73ffffffffffffffffffffffffffffffffffffffff16146110ce576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110c59061199a565b60405180910390fd5b8060028190555050565b6110e0611380565b73ffffffffffffffffffffffffffffffffffffffff166110fe610c39565b73ffffffffffffffffffffffffffffffffffffffff1614611154576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161114b9061199a565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036111c3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111ba90611d97565b60405180910390fd5b6111cc81611388565b50565b6000600454600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054119050919050565b611225336111cf565b15611265576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161125c90611e03565b60405180910390fd5b6001543410156112aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112a190611e6f565b60405180910390fd5b6112b333610b8b565b156112c7576112c2333461144c565b61137e565b60025460058054905010611310576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161130790611edb565b60405180910390fd5b61131a333461144c565b6005339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6001548111156115745760008273ffffffffffffffffffffffffffffffffffffffff166001543461147d9190611cc2565b60405161148990611f2c565b60006040518083038185875af1925050503d80600081146114c6576040519150601f19603f3d011682016040523d82523d6000602084013e6114cb565b606091505b505090508061150f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161150690611f8d565b60405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff167f750e6bbedd4312ada35caa75e07fc0b85f1a6fc9c675e6962aef84691871109783600154346115569190611cc2565b4260405161156693929190611fad565b60405180910390a2506115c8565b8173ffffffffffffffffffffffffffffffffffffffff167f750e6bbedd4312ada35caa75e07fc0b85f1a6fc9c675e6962aef846918711097826000426040516115bf93929190612029565b60405180910390a25b42600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b828054828255906000526020600020908101928215611689579160200282015b828111156116885782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190611630565b5b509050611696919061169a565b5090565b5b808211156116b357600081600090555060010161169b565b5090565b600080fd5b6000819050919050565b6116cf816116bc565b81146116da57600080fd5b50565b6000813590506116ec816116c6565b92915050565b600060208284031215611708576117076116b7565b5b6000611716848285016116dd565b91505092915050565b611728816116bc565b82525050565b6000602082019050611743600083018461171f565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061177482611749565b9050919050565b61178481611769565b82525050565b60008115159050919050565b61179f8161178a565b82525050565b60006040820190506117ba600083018561177b565b6117c76020830184611796565b9392505050565b60006020820190506117e36000830184611796565b92915050565b60006020820190506117fe600083018461177b565b92915050565b61180d81611769565b811461181857600080fd5b50565b60008135905061182a81611804565b92915050565b600060208284031215611846576118456116b7565b5b60006118548482850161181b565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61189281611769565b82525050565b60006118a48383611889565b60208301905092915050565b6000602082019050919050565b60006118c88261185d565b6118d28185611868565b93506118dd83611879565b8060005b8381101561190e5781516118f58882611898565b9750611900836118b0565b9250506001810190506118e1565b5085935050505092915050565b6000602082019050818103600083015261193581846118bd565b905092915050565b600082825260208201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600061198460208361193d565b915061198f8261194e565b602082019050919050565b600060208201905081810360008301526119b381611977565b9050919050565b7f5061727469636970616e7473206e6f7420656e6f756768000000000000000000600082015250565b60006119f060178361193d565b91506119fb826119ba565b602082019050919050565b60006020820190508181036000830152611a1f816119e3565b9050919050565b7f4e6f742065766572796f6e652070616964000000000000000000000000000000600082015250565b6000611a5c60118361193d565b9150611a6782611a26565b602082019050919050565b60006020820190508181036000830152611a8b81611a4f565b9050919050565b60008160601b9050919050565b6000611aaa82611a92565b9050919050565b6000611abc82611a9f565b9050919050565b611ad4611acf82611769565b611ab1565b82525050565b6000819050919050565b611af5611af0826116bc565b611ada565b82525050565b6000611b078285611ac3565b601482019150611b178284611ae4565b6020820191508190509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000611b61826116bc565b9150611b6c836116bc565b925082611b7c57611b7b611b27565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000604082019050611bcb600083018561171f565b611bd8602083018461171f565b9392505050565b7f436f6d6d6974656520616c726561647920737461727465640000000000000000600082015250565b6000611c1560188361193d565b9150611c2082611bdf565b602082019050919050565b60006020820190508181036000830152611c4481611c08565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611c85826116bc565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611cb757611cb6611c4b565b5b600182019050919050565b6000611ccd826116bc565b9150611cd8836116bc565b925082821015611ceb57611cea611c4b565b5b828203905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000611d8160268361193d565b9150611d8c82611d25565b604082019050919050565b60006020820190508181036000830152611db081611d74565b9050919050565b7f596f7520616c7265616479207061696400000000000000000000000000000000600082015250565b6000611ded60108361193d565b9150611df882611db7565b602082019050919050565b60006020820190508181036000830152611e1c81611de0565b9050919050565b7f5061796d656e74206973206e6f7420656e6f7567680000000000000000000000600082015250565b6000611e5960158361193d565b9150611e6482611e23565b602082019050919050565b60006020820190508181036000830152611e8881611e4c565b9050919050565b7f436f6d6d697465652069732066756c6c00000000000000000000000000000000600082015250565b6000611ec560108361193d565b9150611ed082611e8f565b602082019050919050565b60006020820190508181036000830152611ef481611eb8565b9050919050565b600081905092915050565b50565b6000611f16600083611efb565b9150611f2182611f06565b600082019050919050565b6000611f3782611f09565b9150819050919050565b7f5061796d656e74206e6f742073656e7400000000000000000000000000000000600082015250565b6000611f7760108361193d565b9150611f8282611f41565b602082019050919050565b60006020820190508181036000830152611fa681611f6a565b9050919050565b6000606082019050611fc2600083018661171f565b611fcf602083018561171f565b611fdc604083018461171f565b949350505050565b6000819050919050565b6000819050919050565b600061201361200e61200984611fe4565b611fee565b6116bc565b9050919050565b61202381611ff8565b82525050565b600060608201905061203e600083018661171f565b61204b602083018561201a565b612058604083018461171f565b94935050505056fea26469706673582212208f5d58d712b375ebe8151e18439dcbe39e57c87423fa312c600e3cc73721088764736f6c634300080d0033";

type CommiteeMoneyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CommiteeMoneyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CommiteeMoney__factory extends ContractFactory {
  constructor(...args: CommiteeMoneyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CommiteeMoney> {
    return super.deploy(overrides || {}) as Promise<CommiteeMoney>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): CommiteeMoney {
    return super.attach(address) as CommiteeMoney;
  }
  override connect(signer: Signer): CommiteeMoney__factory {
    return super.connect(signer) as CommiteeMoney__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CommiteeMoneyInterface {
    return new utils.Interface(_abi) as CommiteeMoneyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CommiteeMoney {
    return new Contract(address, _abi, signerOrProvider) as CommiteeMoney;
  }
}
