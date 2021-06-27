import { exec } from 'child_process';
import { kebabize } from './common';
export const commandFunction = (command, subCommands) => (context) => (options) => {
    command += Object.entries(options !== null && options !== void 0 ? options : {}).reduce((acc, [key, value]) => {
        switch (typeof value) {
            case 'boolean':
                if (value)
                    acc += `\n --${kebabize(key)}`;
                break;
            case 'string':
            case 'number':
            case 'bigint':
                acc += `\n --${kebabize(key.toString())} ${value}`;
                break;
            default:
                break;
        }
        return acc;
    }, `${context} ${kebabize(command)}`);
    const run = () => new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(error);
            }
            else if (stderr) {
                reject(stderr);
            }
            else {
                resolve(stdout);
            }
        });
    });
    return Object.assign({ command,
        run }, Object.entries(subCommands !== null && subCommands !== void 0 ? subCommands : {}).reduce((acc, [key, value]) => {
        ;
        acc[key] = value(command);
        return acc;
    }, {}));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFDcEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFVBQVUsQ0FBQTtBQStDbkMsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUMzQixDQWlCQyxPQUFlLEVBQ2YsV0FBZ0IsRUFDZixFQUFFLENBQ0osQ0FBQyxPQUFlLEVBQUUsRUFBRSxDQUNwQixDQUFDLE9BQTRCLEVBQUUsRUFBRTtJQUNoQyxPQUFPLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLGFBQVAsT0FBTyxjQUFQLE9BQU8sR0FBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRTtRQUM3RSxRQUFRLE9BQU8sS0FBSyxFQUFFO1lBQ3JCLEtBQUssU0FBUztnQkFDYixJQUFJLEtBQUs7b0JBQUUsR0FBRyxJQUFJLFFBQVEsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUE7Z0JBQ3pDLE1BQUs7WUFDTixLQUFLLFFBQVEsQ0FBQztZQUNkLEtBQUssUUFBUSxDQUFDO1lBQ2QsS0FBSyxRQUFRO2dCQUNaLEdBQUcsSUFBSSxRQUFRLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQTtnQkFDbEQsTUFBSztZQUNOO2dCQUNDLE1BQUs7U0FDTjtRQUNELE9BQU8sR0FBRyxDQUFBO0lBQ1gsQ0FBQyxFQUFFLEdBQUcsT0FBTyxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDckMsTUFBTSxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQ2hCLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1FBQy9CLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3ZDLElBQUksS0FBSyxFQUFFO2dCQUNWLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTthQUNiO2lCQUFNLElBQUksTUFBTSxFQUFFO2dCQUNsQixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUE7YUFDZDtpQkFBTTtnQkFDTixPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7YUFDZjtRQUNGLENBQUMsQ0FBQyxDQUFBO0lBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSCx1QkFDQyxPQUFPO1FBQ1AsR0FBRyxJQUNBLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxhQUFYLFdBQVcsY0FBWCxXQUFXLEdBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUU7UUFDdEUsQ0FBQztRQUFDLEdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBSSxLQUFhLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDNUMsT0FBTyxHQUFHLENBQUE7SUFDWCxDQUFDLEVBQUUsRUFBUyxDQUFDLEVBQ2I7QUFDRixDQUFDLENBQUEifQ==