import { gql} from 'apollo-server-express';
import Account from './staff.typedef';
import Branch from 'branches.schema';
import Drawer from 'drawers.schema';
const linkSchema = gql`
    type Query {
        _: Boolean
    }

    type Mutation {
        _: Boolean
    }

    type Subscription {
        _: Booleans
    }
`;

export default [linkSchema, Account, Branch, Drawer];
