import React, { useEffect, useState } from 'react';
import TimePriceChart from './TimePriceChart';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchedData = [
      { close: 24308.75, datetime: '11/6/2024 9:09' },
      { close: 24308.75, datetime: '11/6/2024 9:10' },
      { close: 24308.75, datetime: '11/6/2024 9:11' },
      { close: 24308.75, datetime: '11/6/2024 9:12' },
      { close: 24308.75, datetime: '11/6/2024 9:13' },
      { close: 24308.75, datetime: '11/6/2024 9:14' },
      { close: 24289.45, datetime: '11/6/2024 9:15' },
      { close: 24266.25, datetime: '11/6/2024 9:16' },
      { close: 24242.05, datetime: '11/6/2024 9:17' },
      { close: 24256.70, datetime: '11/6/2024 9:18' },
      { close: 24262.90, datetime: '11/6/2024 9:19' },
      { close: 24234.35, datetime: '11/6/2024 9:20' },
      { close: 24233.70, datetime: '11/6/2024 9:21' },
      { close: 24206.35, datetime: '11/6/2024 9:22' },
      { close: 24229.20, datetime: '11/6/2024 9:23' },
      { close: 24265.25, datetime: '11/6/2024 9:24' },
      { close: 24283.20, datetime: '11/6/2024 9:25' },
      { close: 24290.60, datetime: '11/6/2024 9:26' },
      { close: 24298.90, datetime: '11/6/2024 9:27' },
      { close: 24311.45, datetime: '11/6/2024 9:28' },
      { close: 24343.85, datetime: '11/6/2024 9:29' },
      { close: 24338.55, datetime: '11/6/2024 9:30' },
      { close: 24338.55, datetime: '11/6/2024 9:31' },
      { close: 24331.65, datetime: '11/6/2024 9:32' },
      { close: 24319.05, datetime: '11/6/2024 9:33' },
      { close: 24326.40, datetime: '11/6/2024 9:34' },
      { close: 24311.10, datetime: '11/6/2024 9:35' },
      { close: 24304.80, datetime: '11/6/2024 9:36' },
      { close: 24316.65, datetime: '11/6/2024 9:37' },
      { close: 24325.20, datetime: '11/6/2024 9:38' },
      { close: 24336.75, datetime: '11/6/2024 9:39' },
      { close: 24340.65, datetime: '11/6/2024 9:40' },
      { close: 24328.10, datetime: '11/6/2024 9:41' },
      { close: 24328.45, datetime: '11/6/2024 9:42' },
      { close: 24326.25, datetime: '11/6/2024 9:43' },
      { close: 24346.40, datetime: '11/6/2024 9:44' },
      { close: 24352.15, datetime: '11/6/2024 9:45' },
      { close: 24363.20, datetime: '11/6/2024 9:46' },
      { close: 24377.20, datetime: '11/6/2024 9:47' },
      { close: 24387.25, datetime: '11/6/2024 9:48' },
      { close: 24384.85, datetime: '11/6/2024 9:49' },
      { close: 24383.45, datetime: '11/6/2024 9:50' },
      { close: 24387.40, datetime: '11/6/2024 9:51' },
      { close: 24374.10, datetime: '11/6/2024 9:52' },
      { close: 24364.70, datetime: '11/6/2024 9:53' },
      { close: 24359.75, datetime: '11/6/2024 9:54' },
      { close: 24346.50, datetime: '11/6/2024 9:55' },
      { close: 24349.30, datetime: '11/6/2024 9:56' },
      { close: 24346.80, datetime: '11/6/2024 9:57' },
      { close: 24357.30, datetime: '11/6/2024 9:58' },
      { close: 24355.80, datetime: '11/6/2024 9:59' },
      { close: 24371.90, datetime: '11/6/2024 10:00' },
      { close: 24386.00, datetime: '11/6/2024 10:01' },
      { close: 24397.65, datetime: '11/6/2024 10:02' },
      { close: 24397.65, datetime: '11/6/2024 10:03' },
      { close: 24401.20, datetime: '11/6/2024 10:04' },
      { close: 24399.00, datetime: '11/6/2024 10:05' },
      { close: 24405.80, datetime: '11/6/2024 10:06' },
      { close: 24407.40, datetime: '11/6/2024 10:07' },
      { close: 24407.95, datetime: '11/6/2024 10:08' },
      { close: 24404.90, datetime: '11/6/2024 10:09' },
      { close: 24395.60, datetime: '11/6/2024 10:10' },
      { close: 24393.55, datetime: '11/6/2024 10:11' },
      { close: 24391.85, datetime: '11/6/2024 10:12' },
      { close: 24377.25, datetime: '11/6/2024 10:13' },
      { close: 24379.25, datetime: '11/6/2024 10:14' },
      { close: 24369.15, datetime: '11/6/2024 10:15' },
      { close: 24373.00, datetime: '11/6/2024 10:16' },
      { close: 24378.70, datetime: '11/6/2024 10:17' },
      { close: 24386.55, datetime: '11/6/2024 10:18' },
      { close: 24375.20, datetime: '11/6/2024 10:19' },
      { close: 24373.15, datetime: '11/6/2024 10:20' },
      { close: 24373.75, datetime: '11/6/2024 10:21' },
      { close: 24371.30, datetime: '11/6/2024 10:22' },
      { close: 24371.65, datetime: '11/6/2024 10:23' },
      { close: 24366.30, datetime: '11/6/2024 10:24' },
      { close: 24363.55, datetime: '11/6/2024 10:25' },
      { close: 24353.20, datetime: '11/6/2024 10:26' },
      { close: 24344.80, datetime: '11/6/2024 10:27' },
      { close: 24327.20, datetime: '11/6/2024 10:28' },
      { close: 24324.80, datetime: '11/6/2024 10:29' },
      { close: 24290.10, datetime: '11/6/2024 10:30' },
      { close: 24305.30, datetime: '11/6/2024 10:31' },
      { close: 24303.65, datetime: '11/6/2024 10:32' },
      { close: 24302.55, datetime: '11/6/2024 10:33' },
      { close: 24313.00, datetime: '11/6/2024 10:34' },
      { close: 24313.00, datetime: '11/6/2024 10:35' },
      { close: 24312.35, datetime: '11/6/2024 10:36' },
      { close: 24317.20, datetime: '11/6/2024 10:37' },
      { close: 24324.65, datetime: '11/6/2024 10:38' },
      { close: 24328.95, datetime: '11/6/2024 10:39' },
      { close: 24313.05, datetime: '11/6/2024 10:40' },
      { close: 24298.25, datetime: '11/6/2024 10:41' },
      { close: 24307.10, datetime: '11/6/2024 10:42' },
      { close: 24299.35, datetime: '11/6/2024 10:43' },
      { close: 24299.45, datetime: '11/6/2024 10:44' },
      { close: 24305.90, datetime: '11/6/2024 10:45' },
      { close: 24318.35, datetime: '11/6/2024 10:46' },
      { close: 24313.85, datetime: '11/6/2024 10:47' },
      { close: 24311.85, datetime: '11/6/2024 10:48' },
      { close: 24304.80, datetime: '11/6/2024 10:49' },
      { close: 24305.20, datetime: '11/6/2024 10:50' },
      { close: 24303.00, datetime: '11/6/2024 10:51' },
      { close: 24310.90, datetime: '11/6/2024 10:52' },
      { close: 24356.00, datetime: '11/6/2024 10:53' },
      { close: 24347.40, datetime: '11/6/2024 10:54' },
      { close: 24347.60, datetime: '11/6/2024 10:55' },
      { close: 24346.70, datetime: '11/6/2024 10:56' },
      { close: 24365.15, datetime: '11/6/2024 10:57' },
      { close: 24362.60, datetime: '11/6/2024 10:58' },
      { close: 24361.20, datetime: '11/6/2024 10:59' },
      { close: 24368.50, datetime: '11/6/2024 11:00' },
      { close: 24376.65, datetime: '11/6/2024 11:01' },
      { close: 24376.55, datetime: '11/6/2024 11:02' },
      { close: 24360.65, datetime: '11/6/2024 11:03' },
      { close: 24352.90, datetime: '11/6/2024 11:04' },
      { close: 24357.50, datetime: '11/6/2024 11:05' },
      { close: 24353.30, datetime: '11/6/2024 11:06' },
      { close: 24353.55, datetime: '11/6/2024 11:07' },
      { close: 24353.85, datetime: '11/6/2024 11:08' },
      { close: 24356.40, datetime: '11/6/2024 11:09' },
      { close: 24364.35, datetime: '11/6/2024 11:10' },
      { close: 24364.55, datetime: '11/6/2024 11:11' },
      { close: 24367.25, datetime: '11/6/2024 11:12' },
      { close: 24367.15, datetime: '11/6/2024 11:13' },
      { close: 24369.05, datetime: '11/6/2024 11:14' },
      { close: 24363.15, datetime: '11/6/2024 11:15' },
      { close: 24369.45, datetime: '11/6/2024 11:16' },
      { close: 24360.55, datetime: '11/6/2024 11:17' },
      { close: 24355.65, datetime: '11/6/2024 11:18' },
      { close: 24356.15, datetime: '11/6/2024 11:19' },
      { close: 24356.65, datetime: '11/6/2024 11:20' },
      { close: 24360.45, datetime: '11/6/2024 11:21' },
      { close: 24360.20, datetime: '11/6/2024 11:22' },
      { close: 24362.25, datetime: '11/6/2024 11:23' },
      { close: 24366.15, datetime: '11/6/2024 11:24' },
      { close: 24365.20, datetime: '11/6/2024 11:25' },
      { close: 24370.55, datetime: '11/6/2024 11:26' },
      { close: 24367.10, datetime: '11/6/2024 11:27' },
      { close: 24364.05, datetime: '11/6/2024 11:28' },
      { close: 24361.95, datetime: '11/6/2024 11:29' },
      { close: 24366.35, datetime: '11/6/2024 11:30' },
      { close: 24373.35, datetime: '11/6/2024 11:31' },
      { close: 24375.20, datetime: '11/6/2024 11:32' },
      { close: 24374.15, datetime: '11/6/2024 11:33' },
      { close: 24389.15, datetime: '11/6/2024 11:34' },
      { close: 24385.40, datetime: '11/6/2024 11:35' },
      { close: 24381.45, datetime: '11/6/2024 11:36' },
      { close: 24383.80, datetime: '11/6/2024 11:37' },
      { close: 24383.50, datetime: '11/6/2024 11:38' },
      { close: 24381.75, datetime: '11/6/2024 11:39' },
      { close: 24380.85, datetime: '11/6/2024 11:40' },
      { close: 24383.70, datetime: '11/6/2024 11:41' },
      { close: 24386.20, datetime: '11/6/2024 11:42' },
      { close: 24387.35, datetime: '11/6/2024 11:43' },
      { close: 24391.75, datetime: '11/6/2024 11:44' },
      { close: 24391.75, datetime: '11/6/2024 11:45' },
      { close: 24397.30, datetime: '11/6/2024 11:46' },
      { close: 24397.15, datetime: '11/6/2024 11:47' },
      { close: 24387.90, datetime: '11/6/2024 11:48' },
      { close: 24393.20, datetime: '11/6/2024 11:49' },
      { close: 24394.80, datetime: '11/6/2024 11:50' },
      { close: 24397.20, datetime: '11/6/2024 11:51' },
      { close: 24405.45, datetime: '11/6/2024 11:52' },
      { close: 24421.40, datetime: '11/6/2024 11:53' },
      { close: 24425.30, datetime: '11/6/2024 11:54' },
      { close: 24436.85, datetime: '11/6/2024 11:55' },
      { close: 24432.35, datetime: '11/6/2024 11:56' },
      { close: 24428.95, datetime: '11/6/2024 11:57' },
      { close: 24436.40, datetime: '11/6/2024 11:58' },
      { close: 24435.90, datetime: '11/6/2024 11:59' },
      { close: 24437.00, datetime: '11/6/2024 12:00' },
      { close: 24433.40, datetime: '11/6/2024 12:01' },
      { close: 24439.90, datetime: '11/6/2024 12:02' },
      { close: 24439.50, datetime: '11/6/2024 12:03' },
      { close: 24439.75, datetime: '11/6/2024 12:04' },
      { close: 24430.40, datetime: '11/6/2024 12:05' },
      { close: 24434.85, datetime: '11/6/2024 12:06' },
      { close: 24431.75, datetime: '11/6/2024 12:07' },
      { close: 24437.25, datetime: '11/6/2024 12:08' },
      { close: 24431.05, datetime: '11/6/2024 12:09' },
      { close: 24436.35, datetime: '11/6/2024 12:10' },
      { close: 24435.45, datetime: '11/6/2024 12:11' },
      { close: 24425.85, datetime: '11/6/2024 12:12' },
      { close: 24420.75, datetime: '11/6/2024 12:13' },
      { close: 24423.25, datetime: '11/6/2024 12:14' },
      { close: 24422.30, datetime: '11/6/2024 12:15' },
      { close: 24422.35, datetime: '11/6/2024 12:16' },
      { close: 24410.40, datetime: '11/6/2024 12:17' },
      { close: 24411.80, datetime: '11/6/2024 12:18' },
      { close: 24415.45, datetime: '11/6/2024 12:19' },
      { close: 24417.55, datetime: '11/6/2024 12:20' },
      { close: 24416.35, datetime: '11/6/2024 12:21' },
      { close: 24416.40, datetime: '11/6/2024 12:22' },
      { close: 24407.45, datetime: '11/6/2024 12:23' },
      { close: 24410.40, datetime: '11/6/2024 12:24' },
      { close: 24417.80, datetime: '11/6/2024 12:25' },
      { close: 24422.30, datetime: '11/6/2024 12:26' },
      { close: 24419.20, datetime: '11/6/2024 12:27' },
      { close: 24423.15, datetime: '11/6/2024 12:28' },
      { close: 24426.50, datetime: '11/6/2024 12:29' },
      { close: 24428.35, datetime: '11/6/2024 12:30' },
      { close: 24429.45, datetime: '11/6/2024 12:31' },
      { close: 24425.00, datetime: '11/6/2024 12:32' },
      { close: 24425.65, datetime: '11/6/2024 12:33' },
      { close: 24435.15, datetime: '11/6/2024 12:34' },
      { close: 24438.10, datetime: '11/6/2024 12:35' },
      { close: 24434.40, datetime: '11/6/2024 12:36' },
      { close: 24438.90, datetime: '11/6/2024 12:37' },
      { close: 24439.70, datetime: '11/6/2024 12:38' },
      { close: 24440.65, datetime: '11/6/2024 12:39' },
      { close: 24442.00, datetime: '11/6/2024 12:40' },
      { close: 24439.95, datetime: '11/6/2024 12:41' },
      { close: 24434.80, datetime: '11/6/2024 12:42' },
      { close: 24426.95, datetime: '11/6/2024 12:43' },
      { close: 24422.05, datetime: '11/6/2024 12:44' },
      { close: 24420.10, datetime: '11/6/2024 12:45' },
      { close: 24416.25, datetime: '11/6/2024 12:46' },
      { close: 24418.00, datetime: '11/6/2024 12:47' },
      { close: 24416.95, datetime: '11/6/2024 12:48' },
      { close: 24419.55, datetime: '11/6/2024 12:49' },
      { close: 24415.45, datetime: '11/6/2024 12:50' },
      { close: 24411.15, datetime: '11/6/2024 12:51' },
      { close: 24407.85, datetime: '11/6/2024 12:52' },
      { close: 24412.20, datetime: '11/6/2024 12:53' },
      { close: 24413.00, datetime: '11/6/2024 12:54' },
      { close: 24420.00, datetime: '11/6/2024 12:55' },
      { close: 24422.90, datetime: '11/6/2024 12:56' },
      { close: 24425.45, datetime: '11/6/2024 12:57' },
      { close: 24427.45, datetime: '11/6/2024 12:58' },
      { close: 24431.35, datetime: '11/6/2024 12:59' },
      { close: 24432.55, datetime: '11/6/2024 13:00' },
      { close: 24425.05, datetime: '11/6/2024 13:01' },
      { close: 24421.75, datetime: '11/6/2024 13:02' },
      { close: 24424.85, datetime: '11/6/2024 13:03' },
      { close: 24427.35, datetime: '11/6/2024 13:04' },
      { close: 24440.80, datetime: '11/6/2024 13:05' },
      { close: 24435.10, datetime: '11/6/2024 13:06' },
      { close: 24435.25, datetime: '11/6/2024 13:07' },
      { close: 24432.90, datetime: '11/6/2024 13:08' },
      { close: 24434.70, datetime: '11/6/2024 13:09' },
      { close: 24454.25, datetime: '11/6/2024 13:10' },
      { close: 24461.15, datetime: '11/6/2024 13:11' },
      { close: 24463.35, datetime: '11/6/2024 13:12' },
      { close: 24462.75, datetime: '11/6/2024 13:13' },
      { close: 24457.25, datetime: '11/6/2024 13:14' },
      { close: 24457.85, datetime: '11/6/2024 13:15' },
      { close: 24463.00, datetime: '11/6/2024 13:16' },
      { close: 24452.45, datetime: '11/6/2024 13:17' },
      { close: 24444.10, datetime: '11/6/2024 13:18' },
      { close: 24448.95, datetime: '11/6/2024 13:19' },
      { close: 24446.90, datetime: '11/6/2024 13:20' },
      { close: 24442.95, datetime: '11/6/2024 13:21' },
      { close: 24438.70, datetime: '11/6/2024 13:22' },
      { close: 24447.25, datetime: '11/6/2024 13:23' },
      { close: 24451.15, datetime: '11/6/2024 13:24' },
      { close: 24443.75, datetime: '11/6/2024 13:25' },
      { close: 24449.15, datetime: '11/6/2024 13:26' },
      { close: 24456.20, datetime: '11/6/2024 13:27' },
      { close: 24458.35, datetime: '11/6/2024 13:28' },
      { close: 24454.00, datetime: '11/6/2024 13:29' },
      { close: 24460.60, datetime: '11/6/2024 13:30' },
      { close: 24468.40, datetime: '11/6/2024 13:31' },
      { close: 24464.30, datetime: '11/6/2024 13:32' },
      { close: 24466.70, datetime: '11/6/2024 13:33' },
      { close: 24467.95, datetime: '11/6/2024 13:34' }
    ];

    setData(fetchedData);
  }, []);

  return (
    <div>
      <h1>Time vs Price Chart</h1>
      <TimePriceChart data={data} />
    </div>
  );
};

export default App;