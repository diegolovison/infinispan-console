import React from 'react';
import {
  AlertVariant,
  Text,
  TextContent,
  TextVariants,
  Toolbar,
  ToolbarGroup,
  ToolbarItem
} from '@patternfly/react-core';
import { AlertIcon } from '@patternfly/react-core/dist/js/components/Alert/AlertIcon';
import displayUtils from '../../services/displayUtils';
import { global_spacer_sm } from '@patternfly/react-tokens';

const Status = (props: { status: string }) => {
  return (
    <Toolbar>
      <ToolbarGroup>
        <ToolbarItem
          style={{
            paddingRight: global_spacer_sm.value,
            color: displayUtils.statusColor(props.status, true)
          }}
        >
          <AlertIcon variant={displayUtils.statusAlterVariant(props.status)} />
        </ToolbarItem>
        <ToolbarItem>
          <TextContent>
            <Text
              component={TextVariants.p}
              style={{ color: displayUtils.statusColor(props.status, false) }}
            >
              {displayUtils.capitalize(props.status)}
            </Text>
          </TextContent>
        </ToolbarItem>
      </ToolbarGroup>
    </Toolbar>
  );
};
export { Status };
