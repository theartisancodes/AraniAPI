import { makeAugmentedSchema } from 'neo4j-graphql-js';
import { GraphQLDate, GraphQLTime, GraphQLDateTime } from 'graphql-iso-date';

const typeDefs = `
	scalar PaymentMethod

	type Staff {
		staffId: ID!
		firstName: String!
		lastName: String!
		email: String!
		roles: [Role] @relation(name: "HAS_ROLES", direction: "OUT")
		draw: [Draw] @relation(name: "MAKES_DRAW", direction: "OUT")
		tender: [Tender] @relation(name: "MAKES_TENDER", direction: "OUT")
		branch: [Branch] @relation(name: "MANAGES_BRANCH" direction: "OUT")
	}

	type Customer {
		customerId: ID!
		loyaltyNumber: String
		date: GraphQLDateTime!
		staffId: Staff! @relation(name: "SERVED_ID", direction: "OUT")
		tender: [Payment] @relation(name: "MAKES_PAYMENT", direction: "OUT")
		items: [Item] @relation(name: "BOUGHT_ITEM", direction: "OUT")
		Return: [Return] @relation(name: "RETURNED_ITEM", direction: "OUT")
	}
	
	
	type Tender {
		transactionId: ID!
		amount: Float!
		date: GraphQLDateTime!
		paymentOption: [PaymentMethod!] @relation(name: "TENDERED_THROUGH", direction: "OUT")
		items: [Item!] @relation(name: "PAY_FOR_ITEM", direction: "OUT")
		Customer: Customer! @relation(name: "MAKES_PAYMENT" direction: "IN")
		StaffId: Staff! @relation(name: "TENDERED_BY", direction: "OUT")
		
	}

	type Draw {
		DrawId: ID!
		openingAmount: Int!
		closingAmount: Int
		openingDate: GraphQLDateTime
		closingDate: GraphQLDateTime
		status: String
		staffId: Staff! @relation(name: "MAKES_DRAW", direction: "IN")
	}
	
	type Product {
		productId: ID!
		vendor: String!
		category: Category @relation(name: "IN_CATEGORY", direction: "OUT")
		items: [Item!] @(relation(name: "IN_PRODUCT", direction: "OUT"))
	}
	type Category {
	categoryId: ID!
	products: [Product!] @relation(name: "IN_CATEGORY", direction: "IN")
	}
	
	type Inventory {
	inventoryId: ID!
	branch: Branch! @relation(name: "", direction: "IN_INVENTORY" direction: "IN")
	}
	type Items {
		itemId: ID!
		barCode: Int!
		deliveryDate: GraphQLDate!
		expiryDate: GraphQLDate
		serialNumber: String
		product: Product! @relation(name: "IN_PRODUCT" directroy: "IN")
		tender: Tender @relation(name: "PAY_FOR_ITEM", direction: "IN")
	}
	type Return {
		returnId: ID!
		date: GraphQLDateTime
		tender: [Tender!] @relation(name: "RETURN" direction: "OUT")
		Customer: Customer! @relation(name: "RETURNED_ITEM" direction: "IN")
		staff: Staff! @relation(name: "RECEIVE_ITEM", direction: "OUT")
	}
	
	type Branch {
	 branchId: ID!
	 location: String!
	 manager: Staff! @relation(name: "MANAGES_BRANCH" direction: "IN")
	}
	
`;
