import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";
import { VOLUNTEER_TITLE_FIELD } from "./VolunteerTitle";
import { FUNDRAISER_TITLE_FIELD } from "../fundraiser/FundraiserTitle";
import { STORY_TITLE_FIELD } from "../story/StoryTitle";

export const VolunteerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="profilePicture" source="profilePicture" />
        <TextField label="bio" source="bio" />
        <TextField label="name" source="name" />
        <TextField label="email" source="email" />
        <ReferenceManyField
          reference="Story"
          target="volunteerId"
          label="Stories"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="title" source="title" />
            <TextField label="content" source="content" />
            <TextField label="image" source="image" />
            <ReferenceField
              label="Category"
              source="category.id"
              reference="Category"
            >
              <TextField source={CATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Volunteer"
              source="volunteer.id"
              reference="Volunteer"
            >
              <TextField source={VOLUNTEER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Donation"
          target="volunteerId"
          label="Donations"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="amount" source="amount" />
            <TextField label="date" source="date" />
            <ReferenceField
              label="Volunteer"
              source="volunteer.id"
              reference="Volunteer"
            >
              <TextField source={VOLUNTEER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Fundraiser"
              source="fundraiser.id"
              reference="Fundraiser"
            >
              <TextField source={FUNDRAISER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Comment"
          target="volunteerId"
          label="Comments"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="content" source="content" />
            <ReferenceField label="Story" source="story.id" reference="Story">
              <TextField source={STORY_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Volunteer"
              source="volunteer.id"
              reference="Volunteer"
            >
              <TextField source={VOLUNTEER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
