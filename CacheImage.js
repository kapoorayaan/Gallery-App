import React from "react";
import { Image } from "react-native";
import { FileSystem } from "expo";

export default class CacheImage extends React.Component {
  state = {
    source: null,
  };

  componentDidMount = async () => {
    const { uri } = this.props;
    const path = `${FileSystem.cacheDirectory}${uri}`;
    const image = await FileSystem.getInfoAsync(path);
    if (image.exists) {
      console.log("read image from cache");
      this.setState({
        source: {
          uri: image.uri,
        },
      });
      return;
    }

    console.log("downloading image to cache");
    const newImage = await FileSystem.downloadAsync(uri, path);
    this.setState({
      source: {
        uri: newImage.uri,
      },
    });
  };
  render() {
    return <Image style={this.props.style} source={this.state.source} />;
  }
}
