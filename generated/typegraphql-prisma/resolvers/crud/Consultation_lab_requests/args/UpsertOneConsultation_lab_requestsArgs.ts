import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Consultation_lab_requestsCreateInput } from "../../../inputs/Consultation_lab_requestsCreateInput";
import { Consultation_lab_requestsUpdateInput } from "../../../inputs/Consultation_lab_requestsUpdateInput";
import { Consultation_lab_requestsWhereUniqueInput } from "../../../inputs/Consultation_lab_requestsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneConsultation_lab_requestsArgs {
  @TypeGraphQL.Field(_type => Consultation_lab_requestsWhereUniqueInput, {
    nullable: false
  })
  where!: Consultation_lab_requestsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Consultation_lab_requestsCreateInput, {
    nullable: false
  })
  create!: Consultation_lab_requestsCreateInput;

  @TypeGraphQL.Field(_type => Consultation_lab_requestsUpdateInput, {
    nullable: false
  })
  update!: Consultation_lab_requestsUpdateInput;
}
