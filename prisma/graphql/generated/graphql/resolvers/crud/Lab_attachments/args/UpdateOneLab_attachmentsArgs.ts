import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Lab_attachmentsUpdateInput } from "../../../inputs/Lab_attachmentsUpdateInput";
import { Lab_attachmentsWhereUniqueInput } from "../../../inputs/Lab_attachmentsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneLab_attachmentsArgs {
  @TypeGraphQL.Field(_type => Lab_attachmentsUpdateInput, {
    nullable: false
  })
  data!: Lab_attachmentsUpdateInput;

  @TypeGraphQL.Field(_type => Lab_attachmentsWhereUniqueInput, {
    nullable: false
  })
  where!: Lab_attachmentsWhereUniqueInput;
}
