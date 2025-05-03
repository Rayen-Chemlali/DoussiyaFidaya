import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Lab_attachmentsCreateInput } from "../../../inputs/Lab_attachmentsCreateInput";
import { Lab_attachmentsUpdateInput } from "../../../inputs/Lab_attachmentsUpdateInput";
import { Lab_attachmentsWhereUniqueInput } from "../../../inputs/Lab_attachmentsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneLab_attachmentsArgs {
  @TypeGraphQL.Field(_type => Lab_attachmentsWhereUniqueInput, {
    nullable: false
  })
  where!: Lab_attachmentsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Lab_attachmentsCreateInput, {
    nullable: false
  })
  create!: Lab_attachmentsCreateInput;

  @TypeGraphQL.Field(_type => Lab_attachmentsUpdateInput, {
    nullable: false
  })
  update!: Lab_attachmentsUpdateInput;
}
