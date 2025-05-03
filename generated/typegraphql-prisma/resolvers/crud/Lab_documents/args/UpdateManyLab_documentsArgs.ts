import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Lab_documentsUpdateManyMutationInput } from "../../../inputs/Lab_documentsUpdateManyMutationInput";
import { Lab_documentsWhereInput } from "../../../inputs/Lab_documentsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyLab_documentsArgs {
  @TypeGraphQL.Field(_type => Lab_documentsUpdateManyMutationInput, {
    nullable: false
  })
  data!: Lab_documentsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Lab_documentsWhereInput, {
    nullable: true
  })
  where?: Lab_documentsWhereInput | undefined;
}
