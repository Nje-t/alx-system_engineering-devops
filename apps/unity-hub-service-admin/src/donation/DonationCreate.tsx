import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { VolunteerTitle } from "../volunteer/VolunteerTitle";
import { FundraiserTitle } from "../fundraiser/FundraiserTitle";

export const DonationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <DateTimeInput label="date" source="date" />
        <ReferenceInput
          source="volunteer.id"
          reference="Volunteer"
          label="Volunteer"
        >
          <SelectInput optionText={VolunteerTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="fundraiser.id"
          reference="Fundraiser"
          label="Fundraiser"
        >
          <SelectInput optionText={FundraiserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
