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
} from "../generated/Marketplace/Marketplace"
import {
  CancelMarketItem,
  ListMarketItem,
  ListMultipleMarketItems,
  MarketSale,
  MarketplaceCommissionTransaction,
  OwnershipTransferred,
  UpdateMarketItem,
  UpdatePlatformFee,
  UpdatePlatformFeeRecipient
} from "../generated/schema"

export function handleCancelMarketItem(event: CancelMarketItemEvent): void {
  let entity = new CancelMarketItem(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.initiator = event.params.initiator
  entity.itemId = event.params.itemId
  entity.marketEvent = event.params.marketEvent
  entity.item_itemId = event.params.item.itemId
  entity.item_nftContract = event.params.item.nftContract
  entity.item_tokenId = event.params.item.tokenId
  entity.item_seller = event.params.item.seller
  entity.item_owner = event.params.item.owner
  entity.item_price = event.params.item.price
  entity.item_forSale = event.params.item.forSale
  entity.item_startingTime = event.params.item.startingTime
  entity.save()
}

export function handleListMarketItem(event: ListMarketItemEvent): void {
  let entity = new ListMarketItem(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.initiator = event.params.initiator
  entity.itemId = event.params.itemId
  entity.marketEvent = event.params.marketEvent
  entity.item_itemId = event.params.item.itemId
  entity.item_nftContract = event.params.item.nftContract
  entity.item_tokenId = event.params.item.tokenId
  entity.item_seller = event.params.item.seller
  entity.item_owner = event.params.item.owner
  entity.item_price = event.params.item.price
  entity.item_forSale = event.params.item.forSale
  entity.item_startingTime = event.params.item.startingTime
  entity.save()
}

export function handleListMultipleMarketItems(
  event: ListMultipleMarketItemsEvent
): void {
  let entity = new ListMultipleMarketItems(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.initiator = event.params.initiator
  entity.nftContract = event.params.nftContract
  entity.marketEvent = event.params.marketEvent
  entity.tokenIds = event.params.tokenIds
  entity.save()
}

export function handleMarketSale(event: MarketSaleEvent): void {
  let entity = new MarketSale(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.initiator = event.params.initiator
  entity.itemId = event.params.itemId
  entity.marketEvent = event.params.marketEvent
  entity.marketItem_itemId = event.params.marketItem.itemId
  entity.marketItem_nftContract = event.params.marketItem.nftContract
  entity.marketItem_tokenId = event.params.marketItem.tokenId
  entity.marketItem_seller = event.params.marketItem.seller
  entity.marketItem_owner = event.params.marketItem.owner
  entity.marketItem_price = event.params.marketItem.price
  entity.marketItem_forSale = event.params.marketItem.forSale
  entity.marketItem_startingTime = event.params.marketItem.startingTime
  entity.save()
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
  let entity = new UpdateMarketItem(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.initiator = event.params.initiator
  entity.itemId = event.params.itemId
  entity.marketEvent = event.params.marketEvent
  entity.item_itemId = event.params.item.itemId
  entity.item_nftContract = event.params.item.nftContract
  entity.item_tokenId = event.params.item.tokenId
  entity.item_seller = event.params.item.seller
  entity.item_owner = event.params.item.owner
  entity.item_price = event.params.item.price
  entity.item_forSale = event.params.item.forSale
  entity.item_startingTime = event.params.item.startingTime
  entity.save()
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
