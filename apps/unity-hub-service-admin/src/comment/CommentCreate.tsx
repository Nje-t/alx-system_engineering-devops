import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { StoryTitle } from "../story/StoryTitle";
import { VolunteerTitle } from "../volunteer/VolunteerTitle";

export const CommentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <ReferenceInput source="story.id" reference="Story" label="Story">
          <SelectInput optionText={StoryTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="volunteer.id"
          reference="Volunteer"
          label="Volunteer"
        >
          <SelectInput optionText={VolunteerTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
