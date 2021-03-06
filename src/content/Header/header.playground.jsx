import * as React from "react";
import { useState } from "react";
import { View } from "react-native";
import { Header, Icon } from "react-native-elements";

import Playground from "../../components/playground";
import { useView, PropTypes } from "react-view";

const HeaderPlayground = () => {
  const params = useView({
    componentName: "Header",
    props: {
      backgroundColor: {
        type: PropTypes.String,
        value: null,
      },
      backgroundImage: {
        type: PropTypes.Object,
        value: null,
      },
      backgroundImageStyle: {
        type: PropTypes.Object,
        value: `{}`,
      },
      barStyle: {
        type: PropTypes.Enum,
        options: {
          default: "default",
          "light-content": "light-content",
          "dark-content": "dark-content",
        },
        value: "default",
      },

      centerComponent: {
        type: PropTypes.Object,
        value: `{ text: 'MY TITLE', style: { color: '#fff' } }`,
        description:
          "{ text: string, ...Text props} OR { icon: string, ...Icon props} OR  React element or component",
      },
      centerContainerStyle: {
        type: PropTypes.Object,
        value: `{}`,
      },
      containerStyle: {
        type: PropTypes.Object,
        value: `{width:350}`,
      },
      leftComponent: {
        type: PropTypes.Object,
        value: `{ icon: 'menu', color: '#fff' }`,
      },
      leftContainerStyle: {
        type: PropTypes.Object,
        value: `{}`,
        description: `{...Gradient props}`,
      },
      linearGradientProps: {
        type: PropTypes.Object,
        value: `{}`,
      },

      placement: {
        type: PropTypes.Enum,
        options: {
          center: "center",
          left: "left",
          right: "right",
        },
        value: "center",
      },

      rightComponent: {
        type: PropTypes.Object,
        value: `{ icon: 'home', color: '#fff' }`,
      },
      rightContainerStyle: {
        type: PropTypes.Object,
        value: `{}`,
      },
      statusBarProps: {
        type: PropTypes.Object,
        value: `{}`,
      },
      ViewComponent: {
        type: PropTypes.ReactNode,
        value: null,
      },
    },
    scope: {
      Header,
      Icon,
    },
    imports: {
      "react-native-elements": {
        named: ["Header", "Icon"],
      },
    },
  });

  return (
    <React.Fragment>
      <Playground params={params} />
    </React.Fragment>
  );
};

export default HeaderPlayground;
