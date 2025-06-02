import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Lab_attachmentsUpdateManyMutationInput } from "../../../inputs/Lab_attachmentsUpdateManyMutationInput";
import { Lab_attachmentsWhereInput } from "../../../inputs/Lab_attachmentsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyLab_attachmentsArgs {
  @TypeGraphQL.Field(_type => Lab_attachmentsUpdateManyMutationInput, {
    nullable: false
  })
  data!: Lab_attachmentsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Lab_attachmentsWhereInput, {
    nullable: true
  })
  where?: Lab_attachmentsWhereInput | undefined;
}
