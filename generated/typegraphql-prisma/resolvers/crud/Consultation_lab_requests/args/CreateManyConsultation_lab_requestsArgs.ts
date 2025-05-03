import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Consultation_lab_requestsCreateManyInput } from "../../../inputs/Consultation_lab_requestsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyConsultation_lab_requestsArgs {
  @TypeGraphQL.Field(_type => [Consultation_lab_requestsCreateManyInput], {
    nullable: false
  })
  data!: Consultation_lab_requestsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
