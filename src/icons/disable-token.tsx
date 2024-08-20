import { Icon } from "@chakra-ui/react";

const DisableTokenIcon = ({ ...props }: any) => (
  <Icon viewBox="0 0 90 90" {...props}>
    <rect width="90" height="90" fill="url(#pattern0)" />
    <defs>
      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0_1390_6995" transform="scale(0.0111111)" />
      </pattern>
      <image
        id="image0_1390_6995"
        width="90"
        height="90"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </Icon>
);

export default DisableTokenIcon;
