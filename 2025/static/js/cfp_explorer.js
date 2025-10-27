// Terminal logging functionality
function logToTerminal(message, type = 'info', cspViolation = null) {
    const terminal = document.getElementById('terminal-output');
    const timestamp = new Date().toLocaleTimeString();
    const logEntry = document.createElement('p');
    
    let violationInfo = '';
    if (cspViolation) {
        violationInfo = `
            <br>CSP Violation Details:
            - Blocked URI: ${cspViolation.blockedURI}
            - Violated Directive: ${cspViolation.violatedDirective}
            - Original Policy: ${cspViolation.originalPolicy}`;
    }
    
    logEntry.innerHTML = `<span class="timestamp">[${timestamp}]</span> ${type === 'error' ? '<span class="error">❌' : '✨'} ${message}${violationInfo}${type === 'error' ? '</span>' : ''}`;
    terminal.appendChild(logEntry);
    terminal.scrollTop = terminal.scrollHeight;
}

// Apply CSP meta tags
function applyCSPMetaTags() {
    const input = document.getElementById('csp-meta-input').value;
    const head = document.head;
    
    // Remove existing CSP meta tags
    const existingMetaTags = head.querySelectorAll('meta[http-equiv="Content-Security-Policy"]');
    existingMetaTags.forEach(tag => tag.remove());
    
    // Add new CSP meta tag
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = input;
    head.appendChild(meta);
    
    logToTerminal('Applied new CSP meta tag: ' + input);
}

// Trigger CSP policy
function triggerCSPPolicy(policy) {
    logToTerminal(`Triggered ${policy} policy`);
    
    // Update description
    document.getElementById('policy-title').textContent = policy;
    document.getElementById('policy-description').innerHTML = getCSPDescription(policy).replace(/\n\n/g, '<br><br>');
    document.getElementById('policy-examples').textContent = getCSPExamples(policy);
    Prism.highlightAll();
    
    // Simulate violation based on policy
    simulateViolation(policy);
}

// Get CSP policy description
function getCSPDescription(policy) {
    const descriptions = {
        'default-src': "Sets a default source list for a number of directives. Example:\n\nContent-Security-Policy: default-src 'self' https://example.com;\n\nThis policy allows content to be loaded only from the document's origin and https://example.com. It acts as a fallback for other fetch directives.",
    
        'script-src': "Specifies valid sources for JavaScript. Example:\n\nContent-Security-Policy: script-src 'self' https://trusted.cdn.com 'nonce-2726c7f26c';\n\nThis policy allows scripts from the same origin, a specific CDN, and inline scripts with a matching nonce. It helps prevent XSS attacks by limiting where scripts can be loaded from.",
    
        'style-src': "Specifies valid sources for stylesheets. Example:\n\nContent-Security-Policy: style-src 'self' https://styles.example.com 'unsafe-inline';\n\nThis policy allows styles from the same origin, a specific domain, and inline styles. 'unsafe-inline' is often necessary for many applications but reduces security.",
    
        'img-src': "Specifies valid sources of images and favicons. Example:\n\nContent-Security-Policy: img-src 'self' https://images.example.com data:;\n\nThis policy allows images from the same origin, a specific image hosting domain, and data URIs. It helps prevent unauthorized image injections.",
    
        'connect-src': "Restricts the URLs which can be loaded using script interfaces. Example:\n\nContent-Security-Policy: connect-src 'self' https://api.example.com wss://realtime.example.com;\n\nThis policy allows connections to the same origin, a specific API endpoint, and a WebSocket server. It helps prevent unauthorized API calls and data exfiltration.",
    
        'font-src': "Specifies valid sources for fonts loaded using @font-face. Example:\n\nContent-Security-Policy: font-src 'self' https://fonts.gstatic.com data:;\n\nThis policy allows fonts from the same origin, Google Fonts, and data URIs. It helps prevent unauthorized font injections which could be used for fingerprinting.",
    
        'object-src': "Specifies valid sources for the <object>, <embed>, and <applet> elements. Example:\n\nContent-Security-Policy: object-src 'none';\n\nThis policy blocks all plugins, which is often recommended for security unless you specifically need to allow plugins.",
    
        'media-src': "Specifies valid sources for loading media using the <audio> and <video> elements. Example:\n\nContent-Security-Policy: media-src 'self' https://media.example.com;\n\nThis policy allows media files from the same origin and a specific media hosting domain. It helps prevent unauthorized media injections.",
    
        'frame-src': "Specifies valid sources for nested browsing contexts loading using elements such as <frame> and <iframe>. Example:\n\nContent-Security-Policy: frame-src 'self' https://trusted-site.com;\n\nThis policy allows frames from the same origin and a specific trusted site. It helps prevent clickjacking attacks.",
    
        'sandbox': "Enables a sandbox for the requested resource similar to the <iframe> sandbox attribute. Example:\n\nContent-Security-Policy: sandbox allow-scripts allow-forms allow-same-origin;\n\nThis policy creates a sandbox, but allows scripts, form submission, and same-origin requests. It helps to restrict potentially untrusted content.",
    
        'report-uri': "Instructs the browser to POST reports of policy failures to this URI. Example:\n\nContent-Security-Policy: default-src 'self'; report-uri /csp-violation-report-endpoint/;\n\nThis policy sends violation reports to a specific endpoint, allowing you to monitor and respond to CSP violations.",
    
        'form-action': "Restricts the URLs which can be used as the target of a form submissions from a given context. Example:\n\nContent-Security-Policy: form-action 'self' https://trusted-form-processor.example.com;\n\nThis policy allows forms to be submitted only to the same origin or a specific trusted processor. It helps prevent unauthorized form submissions.",
    
        'base-uri': "Restricts the URLs which can be used in a document's <base> element. Example:\n\nContent-Security-Policy: base-uri 'self';\n\nThis policy restricts the <base> element to the same origin, preventing attackers from changing the base URL and potentially hijacking relative URLs.",
    
        'plugin-types': "Restricts the set of plugins that can be embedded into a document. Example:\n\nContent-Security-Policy: plugin-types application/pdf;\n\nThis policy allows only PDF plugins to be embedded. It's often better to set object-src to 'none' unless you specifically need plugins.",
    
        'require-sri-for': "Requires the use of SRI for scripts or styles on the page. Example:\n\nContent-Security-Policy: require-sri-for script style;\n\nThis policy requires Subresource Integrity for all scripts and styles, ensuring they haven't been tampered with.",
    
        'upgrade-insecure-requests': "Instructs user agents to treat all of a site's insecure URLs as though they have been replaced with secure URLs. Example:\n\nContent-Security-Policy: upgrade-insecure-requests;\n\nThis policy upgrades HTTP requests to HTTPS, helping to prevent mixed content issues when migrating to HTTPS.",
    
        'block-all-mixed-content': "Prevents loading any assets using HTTP when the page is loaded using HTTPS. Example:\n\nContent-Security-Policy: block-all-mixed-content;\n\nThis policy blocks all mixed content, ensuring that all subresources are loaded over HTTPS when the main page uses HTTPS."
    };    
    return descriptions[policy] || 'No description available.';
}

// Get CSP policy examples
function getCSPExamples(policy) {
    const examples = {
        'default-src': "Content-Security-Policy: default-src 'self' https:;",
        'script-src': "Content-Security-Policy: script-src 'self' https://trusted.cdn.com;",
        'style-src': "Content-Security-Policy: style-src 'self' 'unsafe-inline';",
        'img-src': "Content-Security-Policy: img-src 'self' https://images.example.com;",
        'connect-src': "Content-Security-Policy: connect-src 'self' https://api.example.com;",
        'font-src': "Content-Security-Policy: font-src 'self' https://fonts.gstatic.com;",
        'object-src': "Content-Security-Policy: object-src 'none';",
        'media-src': "Content-Security-Policy: media-src 'self' https://media.example.com;",
        'frame-src': "Content-Security-Policy: frame-src 'self' https://trusted-site.com;",
        'sandbox': "Content-Security-Policy: sandbox allow-scripts allow-forms;",
        'report-uri': "Content-Security-Policy: report-uri /csp-violation-report-endpoint/;",
        'form-action': "Content-Security-Policy: form-action 'self' https://trusted-site.com;",
        'base-uri': "Content-Security-Policy: base-uri 'self';",
        'plugin-types': "Content-Security-Policy: plugin-types application/pdf;",
        'require-sri-for': "Content-Security-Policy: require-sri-for script style;",
        'upgrade-insecure-requests': "Content-Security-Policy: upgrade-insecure-requests;",
        'block-all-mixed-content': "Content-Security-Policy: block-all-mixed-content;"
    };
    return examples[policy] || 'No examples available.';
}

let enforceMode = true;

function toggleMode() {
    enforceMode = !enforceMode;
    document.getElementById('mode-label').textContent = enforceMode ? 'Enforce Mode' : 'Report-Only Mode';
}

function applyCSPMetaTags() {
    const input = document.getElementById('csp-meta-input').value;
    const head = document.head;
    
    // Remove existing CSP meta tags
    const existingMetaTags = head.querySelectorAll('meta[http-equiv="Content-Security-Policy"], meta[http-equiv="Content-Security-Policy-Report-Only"]');
    existingMetaTags.forEach(tag => tag.remove());
    
    // Add new CSP meta tag
    const meta = document.createElement('meta');
    meta.httpEquiv = enforceMode ? 'Content-Security-Policy' : 'Content-Security-Policy-Report-Only';
    meta.content = input;
    head.appendChild(meta);
    
    logToTerminal(`Applied new CSP meta tag in ${enforceMode ? 'Enforce' : 'Report-Only'} mode: ${input}`);
}

function displayContent(content) {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = '';
    contentArea.appendChild(content);
}

// Listen for CSP violations
document.addEventListener('securitypolicyviolation', (e) => {
    logToTerminal('CSP Violation Detected', 'error', {
        blockedURI: e.blockedURI,
        violatedDirective: e.violatedDirective,
        originalPolicy: e.originalPolicy
    });
});

function triggerRemoteScriptViolations() {
    const remoteScriptTests = [
        {
            name: 'jQuery from CDN',
            src: 'https://code.jquery.com/jquery-3.6.0.min.js',
            description: 'Testing loading jQuery from official CDN'
        },
        {
            name: 'Bootstrap Script',
            src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js',
            description: 'Testing loading Bootstrap from jsDelivr CDN'
        },
        {
            name: 'Wikimedia Resource Loader',
            src: 'https://commons.wikimedia.org/w/load.php?modules=site.scripts',
            description: 'Testing loading Wikimedia resource loader scripts'
        },
        {
            name: 'Google Analytics',
            src: 'https://www.google-analytics.com/analytics.js',
            description: 'Testing loading Google Analytics script'
        }
    ];

    remoteScriptTests.forEach(test => {
        try {
            const script = document.createElement('script');
            script.src = test.src;
            
            // Add specific error handling for this script
            script.onerror = (error) => {
                logToTerminal(
                    `Remote script violation detected for ${test.name}:
                    - Source: ${test.src}
                    - Description: ${test.description}
                    - Error: Script loading blocked by CSP`, 
                    'error'
                );
            };

            // Add load handler to detect if script somehow loads despite CSP
            script.onload = () => {
                logToTerminal(
                    `Warning: ${test.name} loaded successfully. 
                    This might indicate a gap in your CSP configuration.`,
                    'error'
                );
            };

            // Attempt to append the script
            document.head.appendChild(script);
            
            logToTerminal(`Attempting to load ${test.name}...`);

            // Create a visual representation in the content area
            const scriptDisplay = document.createElement('div');
            scriptDisplay.innerHTML = `
                <div style="border: 1px solid #ccc; padding: 10px; margin: 5px; background: #f5f5f5;">
                    <strong>${test.name}</strong><br>
                    <small>${test.src}</small><br>
                    <em>${test.description}</em>
                </div>
            `;
            displayContent(scriptDisplay);

        } catch (e) {
            logToTerminal(
                `Script creation blocked for ${test.name}:
                - Source: ${test.src}
                - Error: ${e.message}`,
                'error'
            );
        }
    });

    // Also test dynamic script injection
    try {
        const dynamicScript = `
            console.log('Testing dynamic script execution');
            alert('If you see this, your CSP is not blocking dynamic script execution!');
        `;
        const scriptElement = document.createElement('script');
        scriptElement.textContent = dynamicScript;
        document.head.appendChild(scriptElement);
        
        logToTerminal(
            'Attempting to inject dynamic script content...',
            'error'
        );
    } catch (e) {
        logToTerminal(
            `Dynamic script injection blocked:
            - Error: ${e.message}`,
            'error'
        );
    }

    // Test eval
    try {
        eval('console.log("Testing eval execution")');
        logToTerminal(
            'Warning: eval() execution succeeded. Consider adding \'unsafe-eval\' to your CSP if this is intended.',
            'error'
        );
    } catch (e) {
        logToTerminal(
            `Eval execution blocked:
            - Error: ${e.message}`,
            'error'
        );
    }

    // Test Function constructor
    try {
        new Function('console.log("Testing Function constructor")')();
        logToTerminal(
            'Warning: Function constructor execution succeeded. This might indicate a CSP bypass.',
            'error'
        );
    } catch (e) {
        logToTerminal(
            `Function constructor blocked:
            - Error: ${e.message}`,
            'error'
        );
    }
}

// Add a helper function to clean up scripts
function cleanupScripts() {
    const scripts = document.querySelectorAll('script[src]');
    scripts.forEach(script => {
        if (script.parentNode) {
            script.parentNode.removeChild(script);
        }
    });
    logToTerminal('Cleaned up test scripts');
}

// Modify the displayContent function to handle multiple elements
function displayContent(content) {
    const contentArea = document.getElementById('content-area');
    if (content instanceof Array) {
        contentArea.innerHTML = '';
        content.forEach(element => contentArea.appendChild(element));
    } else {
        contentArea.innerHTML = '';
        contentArea.appendChild(content);
    }
}

// CSP Violation triggers with real domains
function triggerInlineScript() {
    try {
        const script = document.createElement('script');
        script.innerHTML = 'console.log("Testing inline script execution");';
        displayContent(script);
        logToTerminal('Attempting to execute inline script...', 'error');
    } catch (e) {
        logToTerminal(`Inline script blocked: ${e.message}`, 'error');
    }
}

function triggerRemoteScript() {
    try {
        const script = document.createElement('script');
        script.src = 'https://commons.wikimedia.org/w/load.php?modules=site.scripts';
        displayContent(script);
        logToTerminal('Attempting to load Wikimedia script...', 'error');
    } catch (e) {
        logToTerminal(`Remote script blocked: ${e.message}`, 'error');
    }
}

function triggerInlineStyle() {
    try {
        const div = document.createElement('div');
        div.style = 'background: red; padding: 20px; color: white;';
        displayContent(div);
        logToTerminal('Attempting to apply inline style...', 'error');
    } catch (e) {
        logToTerminal(`Inline style blocked: ${e.message}`, 'error');
    }
}

function triggerRemoteStyle() {
    try {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://commons.wikimedia.org/w/load.php?modules=site.styles';
        document.head.appendChild(link);
        logToTerminal('Attempting to load Wikimedia stylesheet...', 'error');
    } catch (e) {
        logToTerminal(`Remote stylesheet blocked: ${e.message}`, 'error');
    }
}

function triggerImageSource() {
    try {
        const img = document.createElement('img');
        img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/200px-Wikipedia-logo-v2.svg.png';
        img.onerror = () => logToTerminal('Image failed to load due to CSP restrictions', 'error');
        displayContent(img);
        logToTerminal('Attempting to load Wikimedia image...');
    } catch (e) {
        logToTerminal(`Image loading blocked: ${e.message}`, 'error');
    }
}

function triggerConnection() {
    try {
        fetch('https://api.github.com/users/github')
            .then(response => response.json())
            .then(data => logToTerminal('GitHub API connection successful'))
            .catch(error => logToTerminal(`Connection blocked: ${error.message}`, 'error'));
        logToTerminal('Attempting to connect to GitHub API...');
    } catch (e) {
        logToTerminal(`Connection blocked: ${e.message}`, 'error');
    }
}

function triggerFont() {
    try {
        const style = document.createElement('style');
        style.textContent = `
            @font-face {
                font-family: 'GoogleFont';
                src: url('https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxK.woff2') format('woff2');
            }
            #content-area { font-family: 'GoogleFont'; }
        `;
        document.head.appendChild(style);
        logToTerminal('Attempting to load Google Font...');
    } catch (e) {
        logToTerminal(`Font loading blocked: ${e.message}`, 'error');
    }
}

function triggerObject() {
    try {
        const object = document.createElement('object');
        object.data = 'https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg';
        object.type = 'image/svg+xml';
        displayContent(object);
        logToTerminal('Attempting to load Wikimedia SVG object...');
    } catch (e) {
        logToTerminal(`Object loading blocked: ${e.message}`, 'error');
    }
}

function triggerMedia() {
    try {
        const audio = document.createElement('audio');
        audio.src = 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Beethoven_Moonlight_1st_movement.ogg';
        audio.controls = true;
        displayContent(audio);
        logToTerminal('Attempting to load Wikimedia audio...');
    } catch (e) {
        logToTerminal(`Media loading blocked: ${e.message}`, 'error');
    }
}

function triggerFrame() {
    try {
        const iframe = document.createElement('iframe');
        iframe.src = 'https://commons.wikimedia.org/wiki/Main_Page';
        displayContent(iframe);
        logToTerminal('Attempting to load Wikimedia iframe...');
    } catch (e) {
        logToTerminal(`Frame loading blocked: ${e.message}`, 'error');
    }
}

function triggerFormAction() {
    try {
        const form = document.createElement('form');
        form.action = 'https://commons.wikimedia.org/w/index.php';
        form.method = 'GET';
        const input = document.createElement('input');
        input.type = 'text';
        input.name = 'search';
        form.appendChild(input);
        displayContent(form);
        logToTerminal('Attempting to submit form to Wikimedia...');
    } catch (e) {
        logToTerminal(`Form submission blocked: ${e.message}`, 'error');
    }
}

function triggerBaseUri() {
    try {
        const base = document.createElement('base');
        base.href = 'https://commons.wikimedia.org/';
        document.head.appendChild(base);
        logToTerminal('Attempting to set Wikimedia base URI...');
    } catch (e) {
        logToTerminal(`Base URI modification blocked: ${e.message}`, 'error');
    }
}

function triggerMixedContent() {
    try {
        const img = document.createElement('img');
        img.src = 'http://commons.wikimedia.org/wiki/Special:FilePath/Wikipedia-logo-v2.svg';
        img.onerror = () => logToTerminal('Mixed content blocked: HTTP image on HTTPS page', 'error');
        displayContent(img);
        logToTerminal('Attempting to load HTTP image...');
    } catch (e) {
        logToTerminal(`Mixed content blocked: ${e.message}`, 'error');
    }
}

// Rest of the code remains the same, but simulateViolation function is updated to use these new functions
function simulateViolation(policy) {
    logToTerminal(`Testing ${policy} policy...`);
    switch(policy) {
        case 'default-src':
            triggerConnection();
            break;
        case 'script-src':
            triggerInlineScript();
            triggerRemoteScript();
            break;
        case 'script-src-remote':
            triggerRemoteScriptViolations();
            break;
        case 'style-src':
            triggerInlineStyle();
            triggerRemoteStyle();
            break;
        case 'img-src':
            triggerImageSource();
            break;
        case 'connect-src':
            triggerConnection();
            break;
        case 'font-src':
            triggerFont();
            break;
        case 'object-src':
            triggerObject();
            break;
        case 'media-src':
            triggerMedia();
            break;
        case 'frame-src':
            triggerFrame();
            break;
        case 'sandbox':
            logToTerminal('Sandbox violations cannot be directly simulated in this context.', 'error');
            break;
        case 'report-uri':
            logToTerminal('Report-URI violations are logged server-side and cannot be directly simulated here.', 'error');
            break;
        case 'form-action':
            triggerFormAction();
            break;
        case 'base-uri':
            triggerBaseUri();
            break;
        case 'plugin-types':
            triggerObject();
            break;
        case 'require-sri-for':
            logToTerminal('SRI violations require server configuration and cannot be directly simulated here.', 'error');
            break;
        case 'upgrade-insecure-requests':
        case 'block-all-mixed-content':
            triggerMixedContent();
            break;
        default:
            logToTerminal(`No specific violation simulation for ${policy}`, 'error');
    }
}

// Initial terminal message
document.addEventListener('DOMContentLoaded', () => {
    logToTerminal('CSP Violation Explorer initialized! Ready for testing...');
    logToTerminal('Enter CSP meta tags or click a policy button to begin');
});
