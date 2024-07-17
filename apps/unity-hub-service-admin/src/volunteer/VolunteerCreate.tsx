import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { StoryTitle } from "../story/StoryTitle";
import { DonationTitle } from "../donation/DonationTitle";
import { CommentTitle } from "../comment/CommentTitle";

export const VolunteerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="bio" multiline source="bio" />
        <TextInput label="name" source="name" />
        <TextInput label="email" source="email" type="email" />
        <ReferenceArrayInput
          source="stories"
          reference="Story"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StoryTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="donations"
          reference="Donation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DonationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="comments"
          reference="Comment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CommentTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
