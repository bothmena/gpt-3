import os
import openai

openai.api_key = "sk-IWdTPm02IpKIwunyWR340wTBp9y4GiSioFxMGWuq"
model_id = 'cmpl-2ssJljn2yAoITImbUoNb1FV0cUxzV'

examples = [
    'Lenovo IdeaPad 100-15IBD 80QQ002DUS 15.6"" 16:9 Notebook - Intel Core i3 (5th Gen) i3-5020U Dual-core (2 Core) 2.20 GHz \n\nScreen Size: 15.6 | Brand: Lenovo',
    'ASUS Metallic 15.6"" GL552VW-DH74 Laptop PC with Intel Core i7-6700HQ Processor, 16GB Memory, 1TB Hard Drive and Windows 10 \n\nScreen Size: 15.6 | Brand: Asus',
]

for sample in examples:
    response = openai.Completion.create(engine="davinci", prompt=sample, temperature=0, max_tokens=60, top_p=1.0, frequency_penalty=0.0, presence_penalty=0.0,stop=["\n\n"])
    print(response)
    print('-' * 50)


prompt = 'Refurbished Apple MacBook Pro 15.4"" Retina i7-3635QM 2.4GHz 16GB 256GB SSD Laptop ME664LL/A'
response = openai.Completion.create(engine="davinci", prompt=prompt, temperature=0, max_tokens=60, top_p=1.0, frequency_penalty=0.0, presence_penalty=0.0,stop=["\n\n"])
print(response)
print('-' * 50)
