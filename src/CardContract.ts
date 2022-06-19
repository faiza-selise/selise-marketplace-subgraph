import {
    Approval as ApprovalEvent,
    ApprovalForAll as ApprovalForAllEvent,
    BurnTokenEvent as BurnTokenEventEvent,
    MergeCardEvent as MergeCardEventEvent,
    MintCardEvent as MintCardEventEvent,
    MintedCompletedEvent as MintedCompletedEventEvent,
    RegisterMarketPlaceEvent as RegisterMarketPlaceEventEvent,
    Transfer as TransferEvent,
    TransferNftEvent as TransferNftEventEvent,
    UpdateCardEvent as UpdateCardEventEvent
  } from "../generated/SeliseNFT/CTANFT";
  import {
    Approval,
    ApprovalForAll,
    BurnTokenEvent,
    Card,
    MergeCardEvent,
    MintCardEvent,
    MintedCompletedEvent,
    RegisterMarketPlaceEvent,
    Transfer,
    TransferNftEvent,
    UpdateCardEvent
  } from "../generated/schema";
  
  export function handleApproval(event: ApprovalEvent): void {
    let entity = new Approval(
      event.transaction.hash.toHex() + "-" + event.logIndex.toString()
    )
    entity.owner = event.params.owner
    entity.approved = event.params.approved
    entity.tokenId = event.params.tokenId
    entity.save()
  }
  
  export function handleApprovalForAll(event: ApprovalForAllEvent): void {
    let entity = new ApprovalForAll(
      event.transaction.hash.toHex() + "-" + event.logIndex.toString()
    )
    entity.owner = event.params.owner
    entity.operator = event.params.operator
    entity.approved = event.params.approved
    entity.save()
  }
  
  export function handleBurnTokenEvent(event: BurnTokenEventEvent): void {
    let entity = new BurnTokenEvent(
      event.transaction.hash.toHex() + "-" + event.logIndex.toString()
    )
    entity.sender = event.params.sender
    entity.tokenId = event.params.tokenId
    entity.save()
  }
  
  export function handleMergeCardEvent(event: MergeCardEventEvent): void {
    let entity = new MergeCardEvent(
      event.transaction.hash.toHex() + "-" + event.logIndex.toString()
    )
    entity.tokenId = event.params.tokenId
    entity.burnedTokenId = event.params.burnedTokenId
    entity.save()
  }
  
  export function handleMintCardEvent(event: MintCardEventEvent): void {
    let entity = new MintCardEvent(
      event.transaction.hash.toHex() + "-" + event.logIndex.toString()
    )
    entity.sender = event.params.sender
    entity.tokenId = event.params.tokenId
    entity.typeOfCard = event.params.typeOfCard
    entity.base_uuid = event.params.base.uuid
    entity.base_id = event.params.base.id
    entity.base_baseId = event.params.base.baseId
    entity.base_number = event.params.base.number
    entity.base_cardType = event.params.base.cardType
    entity.base_category = event.params.base.category
    entity.base_rarity = event.params.base.rarity
    entity.info_name = event.params.info.name
    entity.info_description = event.params.info.description
    entity.info_version = event.params.info.version
    entity.info_illustrator = event.params.info.illustrator
    entity.info_medias = event.params.info.medias
    entity.info_animationUrl = event.params.info.animationUrl
    entity.owner_uuid = event.params.owner.uuid
    entity.owner_owner = event.params.owner.owner
    entity.attr_alternative = event.params.attr.alternative
    entity.attr_foil = event.params.attr.foil
    entity.extra_element = event.params.extra.element
    entity.extra_origin = event.params.extra.origin
    entity.extra_faction = event.params.extra.faction
    entity.extra_basePower = event.params.extra.basePower
    entity.extra_potential = event.params.extra.potential
    entity.extra_rank = event.params.extra.rank
    entity.extra_alternativeCombo = event.params.extra.alternativeCombo
    entity.save()
  
    let cardInfo = new Card(entity.tokenId.toHex())
    cardInfo.sender = event.params.sender
    cardInfo.tokenId = event.params.tokenId
    cardInfo.typeOfCard = event.params.typeOfCard
    cardInfo.base_uuid = event.params.base.uuid
    cardInfo.base_id = event.params.base.id
    cardInfo.base_baseId = event.params.base.baseId
    cardInfo.base_number = event.params.base.number
    cardInfo.base_cardType = event.params.base.cardType
    cardInfo.base_category = event.params.base.category
    cardInfo.base_rarity = event.params.base.rarity
    cardInfo.info_name = event.params.info.name
    cardInfo.info_description = event.params.info.description
    cardInfo.info_version = event.params.info.version
    cardInfo.info_illustrator = event.params.info.illustrator
    cardInfo.info_medias = event.params.info.medias
    cardInfo.info_animationUrl = event.params.info.animationUrl
    cardInfo.owner_uuid = event.params.owner.uuid
    cardInfo.owner_owner = event.params.owner.owner
    cardInfo.attr_alternative = event.params.attr.alternative
    cardInfo.attr_foil = event.params.attr.foil
    cardInfo.extra_element = event.params.extra.element
    cardInfo.extra_origin = event.params.extra.origin
    cardInfo.extra_faction = event.params.extra.faction
    cardInfo.extra_basePower = event.params.extra.basePower
    cardInfo.extra_potential = event.params.extra.potential
    cardInfo.extra_rank = event.params.extra.rank
    cardInfo.extra_alternativeCombo = event.params.extra.alternativeCombo
    cardInfo.save()
  
  }
  
  export function handleMintedCompletedEvent(
    event: MintedCompletedEventEvent
  ): void {
    let entity = new MintedCompletedEvent(
      event.transaction.hash.toHex() + "-" + event.logIndex.toString()
    )
    entity.caller = event.params.caller
    entity.tokenId = event.params.tokenId
    entity.message = event.params.message
    entity.save()
  }
  
  export function handleRegisterMarketPlaceEvent(
    event: RegisterMarketPlaceEventEvent
  ): void {
    let entity = new RegisterMarketPlaceEvent(
      event.transaction.hash.toHex() + "-" + event.logIndex.toString()
    )
    entity.marketPlaceApprover = event.params.marketPlaceApprover
    entity.isApproved = event.params.isApproved
    entity.save()
  }
  
  export function handleTransfer(event: TransferEvent): void {
    let entity = new Transfer(
      event.transaction.hash.toHex() + "-" + event.logIndex.toString()
    )
    entity.from = event.params.from
    entity.to = event.params.to
    entity.tokenId = event.params.tokenId
    entity.save()
  
    let cardInfo =  Card.load(entity.tokenId.toHex())
    if (!cardInfo) {
      cardInfo = new Card(entity.tokenId.toHex())
    }
    cardInfo.tokenId = event.params.tokenId
    cardInfo.owner_owner =  event.params.to
    cardInfo.save()
  }
  
  export function handleTransferNftEvent(event: TransferNftEventEvent): void {
    let entity = new TransferNftEvent(
      event.transaction.hash.toHex() + "-" + event.logIndex.toString()
    )
    entity.from = event.params.from
    entity.to = event.params.to
    entity.tokenId = event.params.tokenId
    entity.save()
  
    let cardInfo =  Card.load(entity.tokenId.toHex())
    if (!cardInfo) {
      cardInfo = new Card(entity.tokenId.toHex())
    }
    cardInfo.tokenId = event.params.tokenId
    cardInfo.owner_owner =  event.params.to
    cardInfo.save()
  }
  
  export function handleUpdateCardEvent(event: UpdateCardEventEvent): void {
    let entity = new UpdateCardEvent(
      event.transaction.hash.toHex() + "-" + event.logIndex.toString()
    )
    entity.tokenId = event.params.tokenId
    entity.typeOfCard = event.params.typeOfCard
    entity.base_uuid = event.params.base.uuid
    entity.base_id = event.params.base.id
    entity.base_baseId = event.params.base.baseId
    entity.base_number = event.params.base.number
    entity.base_cardType = event.params.base.cardType
    entity.base_category = event.params.base.category
    entity.base_rarity = event.params.base.rarity
    entity.info_name = event.params.info.name
    entity.info_description = event.params.info.description
    entity.info_version = event.params.info.version
    entity.info_illustrator = event.params.info.illustrator
    entity.info_medias = event.params.info.medias
    entity.info_animationUrl = event.params.info.animationUrl
    entity.owner_uuid = event.params.owner.uuid
    entity.owner_owner = event.params.owner.owner
    entity.attr_alternative = event.params.attr.alternative
    entity.attr_foil = event.params.attr.foil
    entity.extra_element = event.params.extra.element
    entity.extra_origin = event.params.extra.origin
    entity.extra_faction = event.params.extra.faction
    entity.extra_basePower = event.params.extra.basePower
    entity.extra_potential = event.params.extra.potential
    entity.extra_rank = event.params.extra.rank
    entity.extra_alternativeCombo = event.params.extra.alternativeCombo
    entity.save()
  
  
    let cardInfo =  Card.load(entity.tokenId.toHex())
    if (!cardInfo) {
      cardInfo = new Card(entity.tokenId.toHex())
    }
    cardInfo.tokenId = event.params.tokenId
    cardInfo.typeOfCard = event.params.typeOfCard
    cardInfo.base_uuid = event.params.base.uuid
    cardInfo.base_id = event.params.base.id
    cardInfo.base_baseId = event.params.base.baseId
    cardInfo.base_number = event.params.base.number
    cardInfo.base_cardType = event.params.base.cardType
    cardInfo.base_category = event.params.base.category
    cardInfo.base_rarity = event.params.base.rarity
    cardInfo.info_name = event.params.info.name
    cardInfo.info_description = event.params.info.description
    cardInfo.info_version = event.params.info.version
    cardInfo.info_illustrator = event.params.info.illustrator
    cardInfo.info_medias = event.params.info.medias
    cardInfo.info_animationUrl = event.params.info.animationUrl
    cardInfo.owner_uuid = event.params.owner.uuid
    cardInfo.owner_owner = event.params.owner.owner
    cardInfo.attr_alternative = event.params.attr.alternative
    cardInfo.attr_foil = event.params.attr.foil
    cardInfo.extra_element = event.params.extra.element
    cardInfo.extra_origin = event.params.extra.origin
    cardInfo.extra_faction = event.params.extra.faction
    cardInfo.extra_basePower = event.params.extra.basePower
    cardInfo.extra_potential = event.params.extra.potential
    cardInfo.extra_rank = event.params.extra.rank
    cardInfo.extra_alternativeCombo = event.params.extra.alternativeCombo
    cardInfo.save()
  }
  