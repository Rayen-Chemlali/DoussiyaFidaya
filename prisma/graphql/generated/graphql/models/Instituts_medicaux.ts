import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Authorizations } from "../models/Authorizations";
import { Consultations } from "../models/Consultations";
import { Doctor_instituts } from "../models/Doctor_instituts";
import { Doctors } from "../models/Doctors";
import { instituts_medicaux_type_enum } from "../enums/instituts_medicaux_type_enum";
import { Instituts_medicauxCount } from "../resolvers/outputs/Instituts_medicauxCount";

@TypeGraphQL.ObjectType("Instituts_medicaux", {})
export class Instituts_medicaux {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => instituts_medicaux_type_enum, {
    nullable: false
  })
  type!: "CLINIC" | "HOSPITAL" | "LABORATORY";

  authorizations?: Authorizations[];

  consultations?: Consultations[];

  doctor_instituts?: Doctor_instituts[];

  doctors?: Doctors[];

  @TypeGraphQL.Field(_type => Instituts_medicauxCount, {
    nullable: true
  })
  _count?: Instituts_medicauxCount | null;
}
