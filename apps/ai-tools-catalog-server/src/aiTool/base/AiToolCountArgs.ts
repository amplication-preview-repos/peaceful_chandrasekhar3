/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AiToolWhereInput } from "./AiToolWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class AiToolCountArgs {
  @ApiProperty({
    required: false,
    type: () => AiToolWhereInput,
  })
  @Field(() => AiToolWhereInput, { nullable: true })
  @Type(() => AiToolWhereInput)
  where?: AiToolWhereInput;
}

export { AiToolCountArgs as AiToolCountArgs };