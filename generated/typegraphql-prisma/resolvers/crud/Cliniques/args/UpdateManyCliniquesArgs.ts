import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CliniquesUpdateManyMutationInput } from "../../../inputs/CliniquesUpdateManyMutationInput";
import { CliniquesWhereInput } from "../../../inputs/CliniquesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCliniquesArgs {
  @TypeGraphQL.Field(_type => CliniquesUpdateManyMutationInput, {
    nullable: false
  })
  data!: CliniquesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CliniquesWhereInput, {
    nullable: true
  })
  where?: CliniquesWhereInput | undefined;
}
