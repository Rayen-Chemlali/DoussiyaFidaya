import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MessageWhereInput } from "../../inputs/MessageWhereInput";

@TypeGraphQL.ArgsType()
export class DoctorsCountReceivedMessagesArgs {
  @TypeGraphQL.Field(_type => MessageWhereInput, {
    nullable: true
  })
  where?: MessageWhereInput | undefined;
}
