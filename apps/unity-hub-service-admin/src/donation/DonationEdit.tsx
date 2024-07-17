import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { VolunteerTitle } from "../volunteer/VolunteerTitle";
import { FundraiserTitle } from "../fundraiser/FundraiserTitle";

export const DonationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
