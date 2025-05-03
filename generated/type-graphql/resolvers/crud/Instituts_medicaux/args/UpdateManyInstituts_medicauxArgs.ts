import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Instituts_medicauxUpdateManyMutationInput } from "../../../inputs/Instituts_medicauxUpdateManyMutationInput";
import { Instituts_medicauxWhereInput } from "../../../inputs/Instituts_medicauxWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyInstituts_medicauxArgs {
  @TypeGraphQL.Field(_type => Instituts_medicauxUpdateManyMutationInput, {
    nullable: false
  })
  data!: Instituts_medicauxUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Instituts_medicauxWhereInput, {
    nullable: true
  })
  where?: Instituts_medicauxWhereInput | undefined;
}
