import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Consultations } from "../../models/Consultations";
import { Lab_requests } from "../../models/Lab_requests";

@TypeGraphQL.ObjectType("CreateManyAndReturnConsultation_lab_requests", {})
export class CreateManyAndReturnConsultation_lab_requests {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  consultation_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lab_request_id!: string;

  @TypeGraphQL.Field(_type => Lab_requests, {
    nullable: false
  })
  lab_requests!: Lab_requests;

  @TypeGraphQL.Field(_type => Consultations, {
    nullable: false
  })
  consultations!: Consultations;
}
