// configure the test here
var TestConfig = {
  "TestName": "Mushra Demo Test",
  "RateScalePng": "img/scale_abs.png",
  "RateScaleBgPng": "img/scale_abs_background.png",
  "RateMinValue": 0,
  "RateMaxValue": 100,
  "RateDefaultValue":0,
  "ShowFileIDs": false,
  "ShowResults": false,
  "LoopByDefault": true,
  "EnableABLoop": true,
  "EnableOnlineSubmission": false,
  "BeaqleServiceURL": "",
  "SupervisorContact": "",
  "RandomizeTestOrder": true,
  "MaxTestsPerRun": 2,
  "RequireMaxRating": false,
  "AudioRoot": "",
  "Testsets": [
    //    
    {
      "Name": "Separation 1",
      "TestID": "id1_1",
      "Files": {
            "Reference": "audio/21063_chorus_1_mix.mp3",
            "1": "audio/21063_chorus_1_DCS.mp3",
            "2": "audio/21063_chorus_1_FASST.mp3",
            "3": "audio/21063_chorus_1_predf0.mp3",
            "4": "audio/21063_chorus_1_orif0.mp3",
            "anchor": "audio/21063_chorus_1_ori.mp3",
        }
    },
    {
      "Name": "Audio Quality 1",
      "TestID": "id1_2",
      "Files": {
            "Reference": "audio/21063_chorus_2_mix.mp3",
            "1": "audio/21063_chorus_2_DCS.mp3",
            "2": "audio/21063_chorus_2_FASST.mp3",
            "3": "audio/21063_chorus_2_predf0.mp3",
            "4": "audio/21063_chorus_2_orif0.mp3",
            "anchor": "audio/21063_chorus_2_ori.mp3",
        }
    },
    {
      "Name": "Intelligibility 1",
      "TestID": "id1_3",
      "Files": {
            "Reference": "audio/21063_chorus_3_mix.mp3",
            "1": "audio/21063_chorus_3_DCS.mp3",
            "2": "audio/21063_chorus_3_FASST.mp3",
            "3": "audio/21063_chorus_3_predf0.mp3",
            "4": "audio/21063_chorus_3_orif0.mp3",
            "anchor": "audio/21063_chorus_3_ori.mp3",
        }
    },
    {
      "Name": "Separation 2",
      "TestID": "id1_4",
      "Files": {
            "Reference": "audio/21084_verse_1_mix.mp3",
            "1": "audio/21084_verse_1_DCS.mp3",
            "2": "audio/21084_verse_1_FASST.mp3",
            "3": "audio/21084_verse_1_predf0.mp3",
            "4": "audio/21084_verse_1_orif0.mp3",
            "anchor": "audio/21084_verse_1_ori.mp3",
        }
    },
    {
      "Name": "Audio Quality 2",
      "TestID": "id1_5",
      "Files": {
            "Reference": "audio/21084_verse_2_mix.mp3",
            "1": "audio/21084_verse_2_DCS.mp3",
            "2": "audio/21084_verse_2_FASST.mp3",
            "3": "audio/21084_verse_2_predf0.mp3",
            "4": "audio/21084_verse_2_orif0.mp3",
            "anchor": "audio/21084_verse_2_ori.mp3",
        }
    },
    {
      "Name": "Intelligibility 2",
      "TestID": "id1_6",
      "Files": {
            "Reference": "audio/21084_verse_3_mix.mp3",
            "1": "audio/21084_verse_3_DCS.mp3",
            "2": "audio/21084_verse_3_FASST.mp3",
            "3": "audio/21084_verse_3_predf0.mp3",
            "4": "audio/21084_verse_3_orif0.mp3",
            "anchor": "audio/21084_verse_3_ori.mp3",
        }
    },
    {
      "Name": "Separation 3",
      "TestID": "id1_7",
      "Files": {
            "Reference": "audio/31101_verse_1_mix.mp3",
            "1": "audio/31101_verse_1_DCS.mp3",
            "2": "audio/31101_verse_1_FASST.mp3",
            "3": "audio/31101_verse_1_predf0.mp3",
            "4": "audio/31101_verse_1_orif0.mp3",
            "anchor": "audio/31101_verse_1_ori.mp3",
        }
    },
    {
      "Name": "Audio Quality 3",
      "TestID": "id1_8",
      "Files": {
            "Reference": "audio/31101_verse_2_mix.mp3",
            "1": "audio/31101_verse_2_DCS.mp3",
            "2": "audio/31101_verse_2_FASST.mp3",
            "3": "audio/31101_verse_2_predf0.mp3",
            "4": "audio/31101_verse_2_orif0.mp3",
            "anchor": "audio/31101_verse_2_ori.mp3",
        }
    },
    {
      "Name": "Intelligibility 3",
      "TestID": "id1_9",
      "Files": {
            "Reference": "audio/31101_verse_3_mix.mp3",
            "1": "audio/31101_verse_3_DCS.mp3",
            "2": "audio/31101_verse_3_FASST.mp3",
            "3": "audio/31101_verse_3_predf0.mp3",
            "4": "audio/31101_verse_3_orif0.mp3",
            "anchor": "audio/31101_verse_3_ori.mp3",
        }
    },
    {
      "Name": "Separation 4",
      "TestID": "id1_10",
      "Files": {
            "Reference": "audio/31114_verse_1_mix.mp3",
            "1": "audio/31114_verse_1_DCS.mp3",
            "2": "audio/31114_verse_1_FASST.mp3",
            "3": "audio/31114_verse_1_predf0.mp3",
            "4": "audio/31114_verse_1_orif0.mp3",
            "anchor": "audio/31114_verse_1_ori.mp3",
        }
    },
    {
      "Name": "Audio Quality 4",
      "TestID": "id1_11",
      "Files": {
            "Reference": "audio/31114_verse_2_mix.mp3",
            "1": "audio/31114_verse_2_DCS.mp3",
            "2": "audio/31114_verse_2_FASST.mp3",
            "3": "audio/31114_verse_2_predf0.mp3",
            "4": "audio/31114_verse_2_orif0.mp3",
            "anchor": "audio/31114_verse_2_ori.mp3",
        }
    },
    {
      "Name": "Intelligibility 4",
      "TestID": "id1_12",
      "Files": {
            "Reference": "audio/31114_verse_3_mix.mp3",
            "1": "audio/31114_verse_3_DCS.mp3",
            "2": "audio/31114_verse_3_FASST.mp3",
            "3": "audio/31114_verse_3_predf0.mp3",
            "4": "audio/31114_verse_3_orif0.mp3",
            "anchor": "audio/31114_verse_3_ori.mp3",
        }
    },
    {
      "Name": "Separation 5",
      "TestID": "id1_10",
      "Files": {
            "Reference": "audio/31114_verse_4_mix.mp3",
            "1": "audio/31114_verse_4_DCS.mp3",
            "2": "audio/31114_verse_4_FASST.mp3",
            "3": "audio/31114_verse_4_predf0.mp3",
            "4": "audio/31114_verse_4_orif0.mp3",
            "anchor": "audio/31114_verse_4_ori.mp3",
        }
    },
    {
      "Name": "Audio Quality 5",
      "TestID": "id1_11",
      "Files": {
            "Reference": "audio/31129_chorus_2_mix.mp3",
            "1": "audio/31129_chorus_2_DCS.mp3",
            "2": "audio/31129_chorus_2_FASST.mp3",
            "3": "audio/31129_chorus_2_predf0.mp3",
            "4": "audio/31129_chorus_2_orif0.mp3",
            "anchor": "audio/31114_verse_2_ori.mp3",
        }
    },
    {
      "Name": "Intelligibility 5",
      "TestID": "id1_12",
      "Files": {
            "Reference": "audio/31129_chorus_1_mix.mp3",
            "1": "audio/31129_chorus_1_DCS.mp3",
            "2": "audio/31129_chorus_1_FASST.mp3",
            "3": "audio/31129_chorus_1_predf0.mp3",
            "4": "audio/31129_chorus_1_orif0.mp3",
            "anchor": "audio/31129_chorus_1_ori.mp3",
        }
    },
    {
      "Name": "Separation 6",
      "TestID": "id1_13",
      "Files": {
            "Reference": "audio/31129_chorus_4_mix.mp3",
            "1": "audio/31129_chorus_4_DCS.mp3",
            "2": "audio/31129_chorus_4_FASST.mp3",
            "3": "audio/31129_chorus_4_predf0.mp3",
            "4": "audio/31129_chorus_4_orif0.mp3",
            "anchor": "audio/31129_chorus_4_ori.mp3",
        }
    },
    {
      "Name": "Audio Quality 6",
      "TestID": "id1_14",
      "Files": {
            "Reference": "audio/31129_chorus_3_mix.mp3",
            "1": "audio/31129_chorus_3_DCS.mp3",
            "2": "audio/31129_chorus_3_FASST.mp3",
            "3": "audio/31129_chorus_3_predf0.mp3",
            "4": "audio/31129_chorus_3_orif0.mp3",
            "anchor": "audio/31114_verse_3_ori.mp3",
        }
    },
    {
      "Name": "Intelligibility 6",
      "TestID": "id1_15",
      "Files": {
            "Reference": "audio/31136_verse_1_mix.mp3",
            "1": "audio/31136_verse_1_DCS.mp3",
            "2": "audio/31136_verse_1_FASST.mp3",
            "3": "audio/31136_verse_1_predf0.mp3",
            "4": "audio/31136_verse_1_orif0.mp3",
            "anchor": "audio/31136_verse_1_ori.mp3",
        }
    },
  ]
}
