import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Consultation_lab_requestsWhereUniqueInput } from "../../../inputs/Consultation_lab_requestsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueConsultation_lab_requestsOrThrowArgs {
  @TypeGraphQL.Field(_type => Consultation_lab_requestsWhereUniqueInput, {
    nullable: false
  })
  where!: Consultation_lab_requestsWhereUniqueInput;
}
