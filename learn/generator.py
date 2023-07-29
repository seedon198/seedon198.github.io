import sys
import markdown
import re


def generate_html(input_file):
    with open(input_file, 'r') as md_file:
        md_content = md_file.readlines()
    html_content = ""
    bold_pattern = re.compile(r'\*\*(.+?)\*\*(?!\*)', re.DOTALL)
    image_pattern = re.compile(r'!\[(.*?)\]\((.*?)\)', re.DOTALL)
    code_snippet = None
    ul_started = False
    ol_started = False
    for line in md_content:
        line = line.strip()
        if line.startswith('#'):
            header_level = line.count('#')
            header_text = line.strip('#').strip()
            if header_level == 1:
                html_content += f'<br><br><h2 class="text-danger btn-hover-text-light">{header_text}</h1><br><br>'
            elif header_level == 2:
                html_content += f'<br><h3 class="text-warning">{header_text}</h2><br>'
            elif header_level == 3:
                html_content += f'<br><h4 class="text-warning">{header_text}</h3><br>'
        elif line.startswith('* '):
            if not ul_started:
                html_content += '<ul class="btn-hover-text-light text-secondary">'
                ul_started = True
            list_item_text = line[2:].strip()
            list_item_text = bold_pattern.sub(r'<strong class="text-danger">\1</strong>', list_item_text)
            html_content += f'<li>{list_item_text}</li>'
        elif line.startswith('1. '):
            if not ol_started:
                html_content += '<ol class="btn-hover-text-light text-secondary">'
                ol_started = True
                list_item_text = line[3:].strip()
            list_item_text = bold_pattern.sub(r'<strong class="text-danger">\1</strong>', list_item_text)
            html_content += f'<li>{list_item_text}</li>'
        elif line.startswith('!['):
            alt_text = image_pattern.match(line).group(1)
            image_url = image_pattern.match(line).group(2)
            html_content += f'<img class="figure-img" alt="{alt_text}" src="{image_url}"><br>'
        elif line.startswith('```'):
            if code_snippet:
                html_content += f'<pre><code class="{code_snippet["language"]}">'
                html_content += code_snippet["content"]
                html_content += '</code></pre>'
                code_snippet = None
            else:
                code_snippet = {"language": line.strip('`')}
                continue
        elif code_snippet:
            code_snippet["content"] += line + '\n'
            continue
        else:
            if ul_started:
                html_content += '</ul>'
                ul_started = False
            elif ol_started:
                html_content += '</ol>'
                ol_started = False
            html_content += f'<p class="btn-hover-text-light text-secondary">{line}</p>'
    if ul_started:
        html_content += '</ul>'
    elif ol_started:
        html_content += '</ol>'
    html_content = markdown.markdown(html_content)
    episode_number = int(input_file.split('e')[1].replace('.md', ''))
    back_link = f"/learn/s01e{episode_number - 1}.html"
    next_link = f"/learn/s01e{episode_number + 1}.html"

    template = f'''
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YC8JWDXN1J"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){{dataLayer.push(arguments);}}
            gtag('js', new Date());
            gtag('config', 'G-YC8JWDXN1J');
        </script>
        <favicon href="../favicon.ico"></favicon>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>&#21316;&#21314;&#23610;&#5610;&#23665;&#21314;&#23610;&#20039; &#65297;&#65296;&#65297;</title>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
        <link rel="stylesheet" href="../css/bootstrap4-neon-glow.min.css">
        <link rel="stylesheet" href="../css/styles.css">
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
        <link rel='stylesheet' href='//cdn.jsdelivr.net/font-hack/2.020/css/hack.min.css'>
      </head>
      <body>
      <div class="navbar-dark text-white">
        <div class="container">
          <nav class="navbar px-0 navbar-expand-lg navbar-dark">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <div class="btn-block d-flex justify-content-between align-items-center">
                  <a href="../index.html" class="btn btn-outline-primary btn-shadow px-3 my-2 ml-0 ml-sm-1 btn-hover-text-dark">Home</a>
                  <a href="../village.html" class="btn btn-outline-primary btn-shadow px-3 my-2 ml-0 ml-sm-4 btn-hover-text-dark">Village</a>
                  <a href="https://discord.gg/wQFkzrCQK5" class="btn btn-outline-primary btn-shadow px-3 my-2 ml-0 ml-sm-4 btn-hover-text-dark">Contact</a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div class="jumbotron bg-transparent mb-0 radius-0">
        <div class="container">
          <div class="row">
            <div class="col-xl">
              <h1 class="display-1 text-primary btn-hover-text-danger">Learning<span class="text-danger btn-hover-text-primary vim-caret">Hub</span><span class="card-img"><img class="figure-img" src="res/img/001.png"></span></h1>
                <div class="lead mb-3 text-mono text-justify">
                    <br>
                        <div class="text-mono">
                            <a href="{back_link}"
                            title="Back"
                            class="btn btn-outline-primary btn-shadow px-3 my-2 ml-0 text-left">
                            Back</a>
                            <a href="{next_link}"
                            class="btn btn-outline-primary btn-shadow px-3 my-2 ml-0 ml-sm-1 text-left">
                            Next
                            </a>
                        </div>
                    {html_content}
                </div>
              </div>
            </div>
          </div>
    <br><br><br><br><br><br><br>
        <!-- Optional JavaScript -->
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
     <footer>
        <div class="container-fluid text-center text-reduced-opacity text-primary p-5">
          <p>hw101.me &#174;. This work is open-source, empowering collaboration and unrestricted exploration.</p>
        </div>
      </footer>
      <script src="../js/script.js"></script>
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

        </div>
      </body>
    </html>
    '''
    with open(output_file, 'w') as html_file:
        html_file.write(template)


if __name__ == '__main__':
    input_file = sys.argv[1]
    output_file = input_file.replace('.md', '.html').replace('md/', '')
    generate_html(input_file)
