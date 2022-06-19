import { BigInt, Entity } from "@graphprotocol/graph-ts"
import {
  CancelMarketItem as CancelMarketItemEvent,
  ListMarketItem as ListMarketItemEvent,
  ListMultipleMarketItems as ListMultipleMarketItemsEvent,
  MarketSale as MarketSaleEvent,
  MarketplaceCommissionTransaction as MarketplaceCommissionTransactionEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  UpdateMarketItem as UpdateMarketItemEvent,
  UpdatePlatformFee as UpdatePlatformFeeEvent,
  UpdatePlatformFeeRecipient as UpdatePlatformFeeRecipientEvent
} from "../generated/SeliseMarketplace/Marketplace"
import {
  MarketplaceCommissionTransaction,
  OwnershipTransferred,
  UpdatePlatformFee,
  UpdatePlatformFeeRecipient,
  MarketActivity,
  MarketItem,
  MarketSale,
  Card
} from "../generated/schema"

export function handleListMarketItem(event: ListMarketItemEvent): void {
  let entity = new MarketActivity(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )


  entity.initiator = event.params.initiator
  entity.itemId = event.params.itemId
  entity.marketEvent = event.params.marketEvent
  let item = MarketItem.load(event.params.itemId.toHexString());
  if (!item) {
    item = new MarketItem(event.params.itemId.toHexString());
  }

  item.itemId = event.params.item.itemId
  item.nftContractAddress = event.params.item.nftContract
  item.tokenId = event.params.item.tokenId
  item.seller = event.params.item.seller
  item.owner = event.params.item.owner
  item.price = event.params.item.price
  item.forSale = event.params.item.forSale
  item.startingTime = event.params.item.startingTime
  item.isListed= true;
  let cardInfo =  Card.load(event.params.item.tokenId.toHex())
  if (!cardInfo) {
    cardInfo = new Card(event.params.item.tokenId.toHex())
  }

  item.card = event.params.item.tokenId.toHexString();

  item.save();
  entity.item = event.params.item.itemId.toHexString()


 entity.save();
}


export function handleCancelMarketItem(event: CancelMarketItemEvent): void {
  let entity = new MarketActivity(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )


  entity.initiator = event.params.initiator
  entity.itemId = event.params.itemId
  entity.marketEvent = event.params.marketEvent
  let item = MarketItem.load(event.params.itemId.toHexString());
  if (!item) {
    item = new MarketItem(event.params.itemId.toHexString());
  }

  item.isListed = false;
  item.save();

 entity.save();
}



export function handleMarketSale(event: MarketSaleEvent): void {
  let entity = new MarketActivity(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.initiator = event.params.initiator
  entity.itemId = event.params.itemId
  entity.marketEvent = event.params.marketEvent
  let item = MarketItem.load(event.params.itemId.toHexString());
  if (!item) {
    item = new MarketItem(event.params.itemId.toHexString());
  }
  let seller  = item.owner;
  let newowner =  event.params.initiator
  item.seller = item.owner
  item.owner = event.params.initiator
  item.price = BigInt.fromI32(0);
  item.forSale = false
  item.isListed = false;
item.save();
  entity.item = event.params.itemId.toHexString()
 entity.save();
let updatedItem = MarketItem.load(event.params.itemId.toHexString());

//  let marketSale =  new MarketSale( event.transaction.hash.toHex() + "-" + event.params.itemId.toHexString());
//   marketSale.initiator = event.params.initiator
//   marketSale.itemId = event.params.itemId
//   marketSale.seller = updatedItem.seller
//   marketSale.tokenId  = updatedItem.tokenId


}

export function handleMarketplaceCommissionTransaction(
  event: MarketplaceCommissionTransactionEvent
): void {
  let entity = new MarketplaceCommissionTransaction(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.initiator = event.params.initiator
  entity.itemId = event.params.itemId
  entity.marketEvent = event.params.marketEvent
  entity.platformFee = event.params.platformFee
  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleUpdateMarketItem(event: UpdateMarketItemEvent): void {
  let entity = new MarketActivity(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.initiator = event.params.initiator
  entity.itemId = event.params.itemId
  entity.marketEvent = (event.params.marketEvent)
  let item = MarketItem.load(event.params.itemId.toHexString());
  if (!item) {
    item = new MarketItem(event.params.itemId.toHexString());
  }

  item.itemId = event.params.item.itemId
  item.nftContractAddress = event.params.item.nftContract
  item.tokenId = event.params.item.tokenId
  item.seller = event.params.item.seller
  item.owner = event.params.item.owner
  item.price = event.params.item.price
  item.forSale = event.params.item.forSale
  item.startingTime = event.params.item.startingTime
  item.isListed= true;

  item.save();
  entity.item = event.params.item.itemId.toHexString()


 entity.save();
}

export function handleUpdatePlatformFee(event: UpdatePlatformFeeEvent): void {
  let entity = new UpdatePlatformFee(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.platformFee = event.params.platformFee
  entity.save()
}

export function handleUpdatePlatformFeeRecipient(
  event: UpdatePlatformFeeRecipientEvent
): void {
  let entity = new UpdatePlatformFeeRecipient(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.platformFeeRecipient1 = event.params.platformFeeRecipient1
  entity.platformFeeRecipient2 = event.params.platformFeeRecipient2
  entity.save()
}
