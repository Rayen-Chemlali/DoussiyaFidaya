import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Consultation_lab_requestsCreateInput } from "../../../inputs/Consultation_lab_requestsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneConsultation_lab_requestsArgs {
  @TypeGraphQL.Field(_type => Consultation_lab_requestsCreateInput, {
    nullable: false
  })
  data!: Consultation_lab_requestsCreateInput;
}
