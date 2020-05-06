import os
import json
import pandas as pd

tests = {
0 : ['normvshigh', ['norm', 'high']],
1 : ['highvsfull', ['high', 'full']],
2 : ['normvshigh', ['high', 'norm']],
3 : ['normvsfull', ['full', 'norm']],
4 : ['normvsfull', ['norm', 'full']],
5 : ['highvsfull', ['high', 'full']],
6 : ['highvsfull', ['full', 'high']],
7 : ['normvshigh', ['norm', 'high']],
8 : ['highvsfull', ['high', 'full']],
9 : ['normvshigh', ['high', 'norm']],
10 : ['normvsfull', ['norm', 'full']],
11 : ['highvsfull', ['full', 'high']],
12 : ['normvsfull', ['full', 'norm']],
13 : ['normvshigh', ['norm', 'high']],
14 : ['normvsfull', ['full', 'norm']],
	
15 : ['normvshigh', ['norm', 'high']],
16 : ['highvsfull', ['high', 'full']],
17 : ['normvshigh', ['high', 'norm']],
18 : ['normvsfull', ['full', 'norm']],
19 : ['normvsfull', ['norm', 'full']],
20 : ['highvsfull', ['high', 'full']],
21 : ['highvsfull', ['full', 'high']],
22 : ['normvshigh', ['norm', 'high']],
23 : ['highvsfull', ['high', 'full']],
24 : ['normvshigh', ['high', 'norm']],
25 : ['normvsfull', ['norm', 'full']],
26 : ['highvsfull', ['full', 'high']],
27 : ['normvsfull', ['full', 'norm']],
28 : ['normvshigh', ['norm', 'high']],
29 : ['normvsfull', ['full', 'norm']],
}

results = {"Intelligibility": {'scmvsss' : {'scm' :0, 'ss': 0, 'nopref': 0},
'scsvsss': {'scs': 0, 'ss': 0, 'nopref': 0},
'scsvsscm': {'scs': 0, 'scm': 0, 'nopref': 0}}
, "Source Separation": {'ss' : {'ss' :0, 'mask': 0, 'nopref': 0},
'scs': {'scs': 0, 'mask': 0, 'nopref': 0},
'scm': {'scm': 0, 'mask': 0, 'nopref': 0}}
, "Audio Quality": {'scmvmasks' : {'scm' :0, 'mask': 0, 'nopref': 0},
'scsvmasks': {'scs': 0, 'mask': 0, 'nopref': 0},
'scsvsscm': {'scs': 0, 'scm': 0, 'nopref': 0}}
}

files_to_use = [x for x in os.listdir('./results/') if not x.startswith('.')]
files_to_use = [x for x in files_to_use if int(x.split('-')[0])>20191010]

for file_name in files_to_use:
	with open(os.path.join('./results', file_name)) as the_file:
		data = json.loads(the_file.read())
	for datapoint in data:
		if 'preference' in datapoint.keys():
			identity = int(datapoint['TestID'].strip('id'))
			preference = datapoint['preference']

			if identity<15:
				test_name = "Intelligibility"
			elif identity<30:
				test_name = "Source Separation"
			else:
				test_name = "Audio Quality"
			test = tests[identity]
			if preference == 'A':
				preference = test[1][0]
			elif preference == 'B':
				preference = test[1][1]
			else:
				preference = 'nopref'
			results[test_name][test[0]][preference]+=1

data_intel = pd.DataFrame.from_dict(results['Intelligibility'])
data_ss = pd.DataFrame.from_dict(results['Source Separation'])
data_aq = pd.DataFrame.from_dict(results['Audio Quality'])

import pdb;pdb.set_trace()

# If you have 15 mins to spare can you do this listening test please: https://trompa-mtg.upf.edu/sep_content_eval/ , it would help a lot! 
# Si tienes 15 mins, puedes hacer este listening test? Me ayudas un monton
