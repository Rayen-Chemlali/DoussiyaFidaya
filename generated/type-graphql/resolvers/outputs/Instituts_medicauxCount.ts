import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Instituts_medicauxCountAuthorizationsArgs } from "./args/Instituts_medicauxCountAuthorizationsArgs";
import { Instituts_medicauxCountConsultationsArgs } from "./args/Instituts_medicauxCountConsultationsArgs";
import { Instituts_medicauxCountDoctor_institutsArgs } from "./args/Instituts_medicauxCountDoctor_institutsArgs";
import { Instituts_medicauxCountDoctorsArgs } from "./args/Instituts_medicauxCountDoctorsArgs";

@TypeGraphQL.ObjectType("Instituts_medicauxCount", {})
export class Instituts_medicauxCount {
  authorizations!: number;
  consultations!: number;
  doctor_instituts!: number;
  doctors!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "authorizations",
    nullable: false
  })
  getAuthorizations(@TypeGraphQL.Root() root: Instituts_medicauxCount, @TypeGraphQL.Args() args: Instituts_medicauxCountAuthorizationsArgs): number {
    return root.authorizations;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "consultations",
    nullable: false
  })
  getConsultations(@TypeGraphQL.Root() root: Instituts_medicauxCount, @TypeGraphQL.Args() args: Instituts_medicauxCountConsultationsArgs): number {
    return root.consultations;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "doctor_instituts",
    nullable: false
  })
  getDoctor_instituts(@TypeGraphQL.Root() root: Instituts_medicauxCount, @TypeGraphQL.Args() args: Instituts_medicauxCountDoctor_institutsArgs): number {
    return root.doctor_instituts;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "doctors",
    nullable: false
  })
  getDoctors(@TypeGraphQL.Root() root: Instituts_medicauxCount, @TypeGraphQL.Args() args: Instituts_medicauxCountDoctorsArgs): number {
    return root.doctors;
  }
}
