import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Lab_attachmentsWhereUniqueInput } from "../../../inputs/Lab_attachmentsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueLab_attachmentsOrThrowArgs {
  @TypeGraphQL.Field(_type => Lab_attachmentsWhereUniqueInput, {
    nullable: false
  })
  where!: Lab_attachmentsWhereUniqueInput;
}
