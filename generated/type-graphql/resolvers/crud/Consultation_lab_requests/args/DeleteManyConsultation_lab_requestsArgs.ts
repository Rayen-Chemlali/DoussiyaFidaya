import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Consultation_lab_requestsWhereInput } from "../../../inputs/Consultation_lab_requestsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyConsultation_lab_requestsArgs {
  @TypeGraphQL.Field(_type => Consultation_lab_requestsWhereInput, {
    nullable: true
  })
  where?: Consultation_lab_requestsWhereInput | undefined;
}
