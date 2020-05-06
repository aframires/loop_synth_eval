// configure the test here
// configure the test here
var TestConfig = {
  "TestName": "Percussive Sound Synthesis Evaluation",
  "LoopByDefault": false,
  "ShowFileIDs": false,
  "ShowResults": false,
  "EnableABLoop": true,
  "EnableOnlineSubmission": true,
  "BeaqleServiceURL": "/perc_synth_eval/web_service/beaqleJS_Service.php",
  "SupervisorContact": "",
  "RandomizeTestOrder": true,
  "MaxTestsPerRun": 30,
  "AudioRoot": "",
  "Testsets": [
    //
    {
      "Name": "Kicks 1",
      "TestID": "id0",
      "Files": {
        "A": "audio/Kicks/op_4_9.wav",
        "B": "audio/Kicks/opH_4_9.wav",
        "X": "audio/Kicks/gt_4_9.wav",
        "Y": " ",
      }
    },
    {
      "Name": "Kicks 2",
      "TestID": "id1",
      "Files": {
        "A": "audio/Kicks/opH_4_7.wav",
        "B": "audio/Kicks/opF_4_7.wav",
        "X": "audio/Kicks/gt_4_7.wav",
        "Y": " ",
      }
    },
    {
      "Name": "Kicks 3",
      "TestID": "id2",
      "Files": {
        "A": "audio/Kicks/opH_3_4.wav",
        "B": "audio/Kicks/op_3_4.wav",
        "X": "audio/Kicks/gt_3_4.wav",
        "Y": " ",
      }
    },
    {
      "Name": "Kicks 4",
      "TestID": "id3",
      "Files": {
        "A": "audio/Kicks/opF_1_12.wav",
        "B": "audio/Kicks/op_1_12.wav",
        "X": "audio/Kicks/gt_1_12.wav",
        "Y": " ",
      }
    },
    {
      "Name": "Kicks 5",
      "TestID": "id4",
      "Files": {
        "A": "audio/Kicks/op_3_14.wav",
        "B": "audio/Kicks/opF_3_14.wav",
        "X": "audio/Kicks/gt_3_14.wav",
        "Y": " ",
      }
    },
    {
      "Name": "Kicks 6",
      "TestID": "id5",
      "Files": {
        "A": "audio/Kicks/opH_2_1.wav",
        "B": "audio/Kicks/opF_2_1.wav",
        "X": "audio/Kicks/gt_2_1.wav",
        "Y": " ",
      }
    },
    {
      "Name": "Kicks 7",
      "TestID": "id6",
      "Files": {
        "A": "audio/Kicks/opF_2_11.wav",
        "B": "audio/Kicks/opH_2_11.wav",
        "X": "audio/Kicks/gt_2_11.wav",
        "Y": " ",
      }
    },
    {
      "Name": "Kicks 8",
      "TestID": "id7",
      "Files": {
        "A": "audio/Kicks/op_19_10.wav",
        "B": "audio/Kicks/opH_19_10.wav",
        "X": "audio/Kicks/gt_19_10.wav",
        "Y": " ",
      }
    },
    {
      "Name": "Kicks 9",
      "TestID": "id8",
      "Files": {
        "A": "audio/Kicks/opH_4_12.wav",
        "B": "audio/Kicks/opF_4_12.wav",
        "X": "audio/Kicks/gt_4_12.wav",
        "Y": " ",
      }
    },
    {
      "Name": "Kicks 10",
      "TestID": "id9",
      "Files": {
        "A": "audio/Kicks/opH_0_14.wav",
        "B": "audio/Kicks/op_0_14.wav",
        "X": "audio/Kicks/gt_0_14.wav",
        "Y": " ",
      }
    },
    {
      "Name": "Kicks 11",
      "TestID": "id10",
      "Files": {
        "A": "audio/Kicks/op_5_0.wav",
        "B": "audio/Kicks/opF_5_0.wav",
        "X": "audio/Kicks/gt_5_0.wav",
        "Y": " ",
      }
    },
    {
      "Name": "Kicks 12",
      "TestID": "id11",
      "Files": {
        "A": "audio/Kicks/opF_19_8.wav",
        "B": "audio/Kicks/opH_19_8.wav",
        "X": "audio/Kicks/gt_19_8.wav",
        "Y": " ",
      }
    },
    {
      "Name": "Kicks 13",
      "TestID": "id12",
      "Files": {
        "A": "audio/Kicks/opF_0_7.wav",
        "B": "audio/Kicks/op_0_7.wav",
        "X": "audio/Kicks/gt_0_7.wav",
        "Y": " ",
      }
    },
    {
      "Name": "Kicks 14",
      "TestID": "id13",
      "Files": {
        "A": "audio/Kicks/op_18_15.wav",
        "B": "audio/Kicks/opH_18_15.wav",
        "X": "audio/Kicks/gt_18_15.wav",
        "Y": " ",
      }
    },
    {
      "Name": "Kicks 15",
      "TestID": "id14",
      "Files": {
        "A": "audio/Kicks/opF_19_12.wav",
        "B": "audio/Kicks/op_19_12.wav",
        "X": "audio/Kicks/gt_19_12.wav",
        "Y": " ",
      }
    },
    {
    "Name": "FS 1",
      "TestID": "id15",
      "Files": {
        "A": "audio/FS/op_13_12.wav",
        "B": "audio/FS/opH_13_12.wav",
        "X": "audio/FS/gt_13_12.wav",
        "Y": " ",
      }
    },
    {
      "Name": "FS 2",
      "TestID": "id16",
      "Files": {
        "A": "audio/FS/opH_13_5.wav",
        "B": "audio/FS/opF_13_5.wav",
        "X": "audio/FS/gt_13_5.wav",
        "Y": " ",
      }
    },
    {
      "Name": "FS 3",
      "TestID": "id17",
      "Files": {
        "A": "audio/FS/opH_14_1.wav",
        "B": "audio/FS/op_14_1.wav",
        "X": "audio/FS/gt_14_1.wav",
        "Y": " ",
      }
    },
    {
      "Name": "FS 4",
      "TestID": "id18",
      "Files": {
        "A": "audio/FS/opF_14_5.wav",
        "B": "audio/FS/op_14_5.wav",
        "X": "audio/FS/gt_14_5.wav",
        "Y": " ",
      }
    },
    {
      "Name": "FS 5",
      "TestID": "id19",
      "Files": {
        "A": "audio/FS/op_14_7.wav",
        "B": "audio/FS/opF_14_7.wav",
        "X": "audio/FS/gt_14_7.wav",
        "Y": " ",
      }
    },    
    {
      "Name": "FS 6",
      "TestID": "id20",
      "Files": {
        "A": "audio/FS/opH_15_11.wav",
        "B": "audio/FS/opF_15_11.wav",
        "X": "audio/FS/gt_15_11.wav",
        "Y": " ",
      }
    },    //
    {
      "Name": "FS 7",
      "TestID": "id21",
      "Files": {
        "A": "audio/FS/opF_15_7.wav",
        "B": "audio/FS/opH_15_7.wav",
        "X": "audio/FS/gt_15_7.wav",
        "Y": " ",
      }
    },
    {
      "Name": "FS 8",
      "TestID": "id22",
      "Files": {
        "A": "audio/FS/op_16_1.wav",
        "B": "audio/FS/opH_16_1.wav",
        "X": "audio/FS/gt_16_1.wav",
        "Y": " ",
      }
    },
    {
      "Name": "FS 9",
      "TestID": "id23",
      "Files": {
        "A": "audio/FS/opH_16_7.wav",
        "B": "audio/FS/opF_16_7.wav",
        "X": "audio/FS/gt_16_7.wav",
        "Y": " ",
      }
    },
    {
      "Name": "FS 10",
      "TestID": "id24",
      "Files": {
        "A": "audio/FS/opH_1_2.wav",
        "B": "audio/FS/op_1_2.wav",
        "X": "audio/FS/gt_1_2.wav",
        "Y": " ",
      }
    },
    {
      "Name": "FS 11",
      "TestID": "id25",
      "Files": {
        "A": "audio/FS/op_2_0.wav",
        "B": "audio/FS/opF_2_0.wav",
        "X": "audio/FS/gt_2_0.wav",
        "Y": " ",
      }
    },
    {
      "Name": "FS 12",
      "TestID": "id26",
      "Files": {
        "A": "audio/FS/opF_4_15.wav",
        "B": "audio/FS/opH_4_15.wav",
        "X": "audio/FS/gt_4_15.wav",
        "Y": " ",
      }
    },
    {
      "Name": "FS 13",
      "TestID": "id27",
      "Files": {
        "A": "audio/FS/opF_5_1.wav",
        "B": "audio/FS/op_5_1.wav",
        "X": "audio/FS/gt_5_1.wav",
        "Y": " ",
      }
    },
    {
      "Name": "FS 14",
      "TestID": "id28",
      "Files": {
        "A": "audio/FS/op_5_4.wav",
        "B": "audio/FS/opH_5_4.wav",
        "X": "audio/FS/gt_5_4.wav",
        "Y": " ",
      }
    },
    {
      "Name": "FS 15",
      "TestID": "id29",
      "Files": {
        "A": "audio/FS/opF_5_8.wav",
        "B": "audio/FS/op_5_8.wav",
        "X": "audio/FS/gt_5_8.wav",
        "Y": " ",
      }
    },
     
  ]
}

