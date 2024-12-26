import {Svg, G, Path} from 'react-native-svg';
import {IconProps} from '../../types/common.type';

export const MenuIcon: React.FC<IconProps> = ({fill, height, width}) => {
  return (
    <Svg width={width} height={height} x="0" y="0" viewBox="0 0 384 384">
      <G>
        <Path
          d="M368 154.668H16c-8.832 0-16-7.168-16-16s7.168-16 16-16h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zM368 32H16C7.168 32 0 24.832 0 16S7.168 0 16 0h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zM368 277.332H16c-8.832 0-16-7.168-16-16s7.168-16 16-16h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0"
          fill={fill}
          opacity="1"
          data-original="#000000"></Path>
      </G>
    </Svg>
  );
};

export const SearchIcon: React.FC<IconProps> = ({fill, height, width}) => {
  return (
    <Svg width={width} height={height} x="0" y="0" viewBox="0 0 612.01 612.01">
      <G>
        <Path
          d="M606.209 578.714 448.198 423.228C489.576 378.272 515 318.817 515 253.393 514.98 113.439 399.704 0 257.493 0S.006 113.439.006 253.393s115.276 253.393 257.487 253.393c61.445 0 117.801-21.253 162.068-56.586l158.624 156.099c7.729 7.614 20.277 7.614 28.006 0a19.291 19.291 0 0 0 .018-27.585zM257.493 467.8c-120.326 0-217.869-95.993-217.869-214.407S137.167 38.986 257.493 38.986c120.327 0 217.869 95.993 217.869 214.407S377.82 467.8 257.493 467.8z"
          fill={fill}
          opacity="1"
          data-original="#000000"></Path>
      </G>
    </Svg>
  );
};
