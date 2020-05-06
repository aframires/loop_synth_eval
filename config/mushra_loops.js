// configure the test here
var TestConfig = {
  "TestName": "Loop Synthesis Quality Test",
  "RateScalePng": "img/scale_abs.png",
  "RateScaleBgPng": "img/scale_abs_background.png",
  "RateMinValue": 0,
  "RateMaxValue": 100,
  "RateDefaultValue":0,
  "ShowFileIDs": false,
  "ShowResults": false,
  "LoopByDefault": false,
  "EnableABLoop": true,
  "EnableOnlineSubmission": true,
  "BeaqleServiceURL": "/loop_synth_eval/web_service/beaqleJS_Service.php",
  "SupervisorContact": "antonio.ramires@upf.edu",
  "RandomizeTestOrder": true,
  "MaxTestsPerRun": 16,
  "RequireMaxRating": false,
  "AudioRoot": "",
  "Testsets": [
    //    
    {
      "Name": "Loop 1",
      "TestID": "id1",
      "Files": {
            "Reference": "audio/gt_1_15.wav",
            "1": "audio/op_1_15_wave.wav",
            "2": "audio/op_1_15_mfcc.wav",
            "3": "audio/op_1_15_wavenet.wav",
            "4": "audio/op_1_15_spec.wav",
        }
    },
    {
      "Name": "Loop 2",
      "TestID": "id2",
      "Files": {
            "Reference": "audio/gt_2_1.wav",
            "1": "audio/op_2_1_wave.wav",
            "2": "audio/op_2_1_mfcc.wav",
            "3": "audio/op_2_1_wavenet.wav",
            "4": "audio/op_2_1_spec.wav",
        }
    },
    {
      "Name": "Loop 3",
      "TestID": "id3",
      "Files": {
            "Reference": "audio/gt_2_6.wav",
            "1": "audio/op_2_6_wave.wav",
            "2": "audio/op_2_6_mfcc.wav",
            "3": "audio/op_2_6_wavenet.wav",
            "4": "audio/op_2_6_spec.wav",
        }
    },
    {
      "Name": "Loop 4",
      "TestID": "id4",
      "Files": {
            "Reference": "audio/gt_2_12.wav",
            "1": "audio/op_2_12_wave.wav",
            "2": "audio/op_2_12_mfcc.wav",
            "3": "audio/op_2_12_wavenet.wav",
            "4": "audio/op_2_12_spec.wav",
        }
    },
    {
      "Name": "Loop 5",
      "TestID": "id5",
      "Files": {
            "Reference": "audio/gt_3_7.wav",
            "1": "audio/op_3_7_wave.wav",
            "2": "audio/op_3_7_mfcc.wav",
            "3": "audio/op_3_7_wavenet.wav",
            "4": "audio/op_3_7_spec.wav",
        }
    },
    {
      "Name": "Loop 6",
      "TestID": "id6",
      "Files": {
            "Reference": "audio/gt_3_11.wav",
            "1": "audio/op_3_11_wave.wav",
            "2": "audio/op_3_11_mfcc.wav",
            "3": "audio/op_3_11_wavenet.wav",
            "4": "audio/op_3_11_spec.wav",
        }
    },
    {
      "Name": "Loop 7",
      "TestID": "id7",
      "Files": {
            "Reference": "audio/gt_4_7.wav",
            "1": "audio/op_4_7_wave.wav",
            "2": "audio/op_4_7_mfcc.wav",
            "3": "audio/op_4_7_wavenet.wav",
            "4": "audio/op_4_7_spec.wav",
        }
    },
    {
      "Name": "Loop 8",
      "TestID": "id8",
      "Files": {
            "Reference": "audio/gt_5_1.wav",
            "1": "audio/op_5_1_wave.wav",
            "2": "audio/op_5_1_mfcc.wav",
            "3": "audio/op_5_1_wavenet.wav",
            "4": "audio/op_5_1_spec.wav",
        }
    },
    {
      "Name": "Loop 1",
      "TestID": "id9",
      "Files": {
            "Reference": "audio/gt_5_2.wav",
            "1": "audio/op_5_2_wave.wav",
            "2": "audio/op_5_2_mfcc.wav",
            "3": "audio/op_5_2_wavenet.wav",
            "4": "audio/op_5_2_spec.wav",
        }
    },
    {
      "Name": "Loop 10",
      "TestID": "id10",
      "Files": {
            "Reference": "audio/gt_5_10.wav",
            "1": "audio/op_5_10_wave.wav",
            "2": "audio/op_5_10_mfcc.wav",
            "3": "audio/op_5_10_wavenet.wav",
            "4": "audio/op_5_10_spec.wav",
        }
    },
    {
      "Name": "Loop 11",
      "TestID": "id11",
      "Files": {
            "Reference": "audio/gt_7_5.wav",
            "1": "audio/op_7_5_wave.wav",
            "2": "audio/op_7_5_mfcc.wav",
            "3": "audio/op_7_5_wavenet.wav",
            "4": "audio/op_7_5_spec.wav",
        }
    },
    {
      "Name": "Loop 12",
      "TestID": "id12",
      "Files": {
            "Reference": "audio/gt_7_6.wav",
            "1": "audio/op_7_6_wave.wav",
            "2": "audio/op_7_6_mfcc.wav",
            "3": "audio/op_7_6_wavenet.wav",
            "4": "audio/op_7_6_spec.wav",
        }
    },
    {
      "Name": "Loop 13",
      "TestID": "id13",
      "Files": {
            "Reference": "audio/gt_7_9.wav",
            "1": "audio/op_7_9_wave.wav",
            "2": "audio/op_7_9_mfcc.wav",
            "3": "audio/op_7_9_wavenet.wav",
            "4": "audio/op_7_9_spec.wav",
        }
    },
    {
      "Name": "Loop 14",
      "TestID": "id14",
      "Files": {
            "Reference": "audio/gt_7_10.wav",
            "1": "audio/op_7_10_wave.wav",
            "2": "audio/op_7_10_mfcc.wav",
            "3": "audio/op_7_10_wavenet.wav",
            "4": "audio/op_7_10_spec.wav",
        }
    },
    {
      "Name": "Loop 15",
      "TestID": "id15",
      "Files": {
            "Reference": "audio/gt_8_1.wav",
            "1": "audio/op_8_1_wave.wav",
            "2": "audio/op_8_1_mfcc.wav",
            "3": "audio/op_8_1_wavenet.wav",
            "4": "audio/op_8_1_spec.wav",
        }
    },
    {
      "Name": "Loop 15",
      "TestID": "id15",
      "Files": {
            "Reference": "audio/gt_8_9.wav",
            "1": "audio/op_8_9_wave.wav",
            "2": "audio/op_8_9_mfcc.wav",
            "3": "audio/op_8_9_wavenet.wav",
            "4": "audio/op_8_9_spec.wav",
        }
    },

  ]
}
