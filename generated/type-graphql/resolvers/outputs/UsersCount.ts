import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCountDoctorsArgs } from "./args/UsersCountDoctorsArgs";
import { UsersCountPatientsArgs } from "./args/UsersCountPatientsArgs";

@TypeGraphQL.ObjectType("UsersCount", {})
export class UsersCount {
  doctors!: number;
  patients!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "doctors",
    nullable: false
  })
  getDoctors(@TypeGraphQL.Root() root: UsersCount, @TypeGraphQL.Args() args: UsersCountDoctorsArgs): number {
    return root.doctors;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "patients",
    nullable: false
  })
  getPatients(@TypeGraphQL.Root() root: UsersCount, @TypeGraphQL.Args() args: UsersCountPatientsArgs): number {
    return root.patients;
  }
}
