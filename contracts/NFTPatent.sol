pragma solidity ^0.5.6;
pragma experimental ABIEncoderV2;

import "./TRC721.sol";
import "./TRC721Metadata.sol";


  contract NFTPatent is TRC721,TRC721Metadata
  {
      
    using Counters for Counters.Counter;
    Counters.Counter  ItemsSold ; // Total Items Sold till now 
    Counters.Counter  TotalItems ; // Total number of NFTS Items 
    uint256 public MinimumListingPrice = 1 trx; 
    address Owner;
      
     mapping(uint256 => NFTItem) private TokenIdToNFTItem; // mapping of int to struct 
     mapping(string => uint256) private Categories;
     mapping(address=>uint256) public balances;
    
    struct NFTItem {
      uint256 tokenId;
      string TokenURI;
      string description;
      string category;
      address  seller;
      address   owner;
      address payable current_bider;
      uint256 price;
      bool sold;
    }
    
      
      constructor() public TRC721Metadata("NFTPatent","NFTP")
      {
          Owner = msg.sender;
      }
      
      
      modifier onlyOwner()
    {
      require(msg.sender == Owner,"Only Owner can call this function");
      _;  
    }
    
    
    
    function UpdateListingPrice(uint256 _price) public onlyOwner
   {
      MinimumListingPrice = _price;
   }

     function GetListingPrice() public view returns(uint256)
   {
       return MinimumListingPrice;
   }


    function MintNFT(uint256 _price,string memory _TokenURI,string memory  _category,string memory _description) public  
    {
       require(_price >=MinimumListingPrice,"The price should be atleast minimum");
       TotalItems.increment();
        uint256 newItemId = TotalItems.current();
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, _TokenURI);
       TokenIdToNFTItem[TotalItems.current()] = NFTItem(
            TotalItems.current(),
            _TokenURI,
            _description,
            _category,
             msg.sender,
            address(this),
            address(0),
            _price,
            false
       );
       Categories[_category]+=1;
       balances[msg.sender]+=1;
    }
    
    
        function GetAll() public view returns(NFTItem[] memory)
    {
            uint256 _TotalItems = TotalItems.current() ;
            uint256 currentIndex = 0;

            NFTItem[] memory items = new NFTItem[](_TotalItems);
            for (uint256 i = 0; i < TotalItems.current(); i++) {
             uint256 currentId = i + 1;
             NFTItem storage currentItem = TokenIdToNFTItem[currentId];
             items[currentIndex] = currentItem;
             currentIndex += 1;
      }
             return items;
    }


      function GetAccordingToCategory(string memory _category) public view returns(NFTItem[] memory)
      {
           uint256 _TotalItems = Categories[_category];
           uint256 currentIndex = 0;
           NFTItem[] memory items = new NFTItem[](_TotalItems);
           for(uint256 i=0;i< TotalItems.current();i++)
           {
               uint256 currentId = i + 1;
               if(keccak256(abi.encodePacked(TokenIdToNFTItem[currentId].category))== keccak256(abi.encodePacked((_category))))
               {
                    NFTItem storage currentItem = TokenIdToNFTItem[currentId];
                    items[currentIndex] = currentItem;
                    currentIndex += 1;
               }
           }
           return items;
      }
    
    
      function GetAccordingToAddress(address _user) public view returns(NFTItem[] memory )
      {
            require(address(this) != _user,"User shouldnot be the contract address");
            uint256 currentIndex = 0;
            uint256 _TotalItems = balances[_user];
            NFTItem[] memory items = new NFTItem[](_TotalItems);
            
            for(uint256 i=0;i< TotalItems.current();i++)
            {
                if(TokenIdToNFTItem[i+1].owner == _user || TokenIdToNFTItem[i+1].seller == _user)
                {
                    NFTItem storage currentItem = TokenIdToNFTItem[currentIndex];
                    items[currentIndex] = currentItem;
                    currentIndex += 1;
                }
            }
            
            
            return items;
            
      }
      
      
      function GetAccordingToTokenId(uint256 _tokenid) public view returns(NFTItem memory)
      {
            require(_tokenid > 0  && _tokenid <=TotalItems.current(),"Token Id doesnt exist");
            return TokenIdToNFTItem[_tokenid];
      }
      
       function MakeOffer(uint256 _tokenId) public payable
    {
       require(_tokenId > 0  && _tokenId <=TotalItems.current(),"Token Id doesnt exist");
       require(msg.value > TokenIdToNFTItem[_tokenId].price,"Bid is not enough");
       if(TokenIdToNFTItem[_tokenId].current_bider != address(0))
       {
         TokenIdToNFTItem[_tokenId].current_bider.send(TokenIdToNFTItem[_tokenId].price);
       
       }
       TokenIdToNFTItem[_tokenId].current_bider = msg.sender;
       TokenIdToNFTItem[_tokenId].price = msg.value;
    }
    
    
      function CancelOffer(uint256 _tokenId) public 
      {
         require(_tokenId > 0  && _tokenId <=TotalItems.current(),"Token Id doesnt exist");
         require(msg.sender == TokenIdToNFTItem[_tokenId].current_bider,"Only current_bider can cancel the offer");
         TokenIdToNFTItem[_tokenId].current_bider.send(TokenIdToNFTItem[_tokenId].price);
         TokenIdToNFTItem[_tokenId].current_bider = address(0);
         TokenIdToNFTItem[_tokenId].price = MinimumListingPrice;
      }
    
    
      
        function ApproveNFTToBeSold(uint256 _tokenId) public 
    {
       require(_tokenId > 0  && _tokenId <=TotalItems.current(),"Token Id doesnt exist");
       require(msg.sender == TokenIdToNFTItem[_tokenId].seller,"Only Seller can approve and sell the NFT");
        TokenIdToNFTItem[_tokenId].owner= TokenIdToNFTItem[_tokenId].current_bider;
       _transferFrom(msg.sender,TokenIdToNFTItem[_tokenId].owner,_tokenId);
       msg.sender.send(TokenIdToNFTItem[_tokenId].price );
       TokenIdToNFTItem[_tokenId].seller = address(0);
       TokenIdToNFTItem[_tokenId].current_bider = address(0);
       TokenIdToNFTItem[_tokenId].price = 0 trx;
       TokenIdToNFTItem[_tokenId].sold = true;
       ItemsSold.increment();
       balances[msg.sender]-=1;
       balances[TokenIdToNFTItem[_tokenId].owner]+=1;
    }
      
    
      
  }
  
  