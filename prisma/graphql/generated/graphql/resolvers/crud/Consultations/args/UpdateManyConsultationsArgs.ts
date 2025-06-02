import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ConsultationsUpdateManyMutationInput } from "../../../inputs/ConsultationsUpdateManyMutationInput";
import { ConsultationsWhereInput } from "../../../inputs/ConsultationsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyConsultationsArgs {
  @TypeGraphQL.Field(_type => ConsultationsUpdateManyMutationInput, {
    nullable: false
  })
  data!: ConsultationsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ConsultationsWhereInput, {
    nullable: true
  })
  where?: ConsultationsWhereInput | undefined;
}
