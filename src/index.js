import { useElement, useLayout, useEffect, useState } from '@nebula.js/stardust';
import properties from './object-properties';
import data from './data';
import { render } from './root';

export default function supernova() {
  return {
    qae: {
      properties,
      data,
    },
    component() {

      const el = useElement();
      const layout = useLayout();
      
      const [seriesData, setSeriesData] = useState([]);
      const [dimKey, setDimKey] = useState([]);
      const [measKeys, setMeasKeys] = useState([]);
      const hc = layout.qHyperCube;
      const series = [];

      useEffect(() => {

        const hcData =  hc.qDataPages[0].qMatrix;

        if (hcData.length === 0) return;

        const dim1 = hc.qDimensionInfo[0].qFallbackTitle;
        const meas1 = hc.qMeasureInfo[0].qFallbackTitle;
        const meas2 = hc.qMeasureInfo[1].qFallbackTitle;

        hcData.map(e => (
          series.push({
            [dim1]: e[0].qText,
            [meas1]: e[1].qText,
            [meas2]: e[2].qText,
          })
        ));

        setDimKey([dim1]);
        setMeasKeys([meas1, meas2]);
        setSeriesData(series);
      }, [layout]);

      render(el, seriesData, dimKey, measKeys, { layout });
    },
  };
}